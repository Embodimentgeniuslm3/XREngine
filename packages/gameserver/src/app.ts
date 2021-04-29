import fs from 'fs';
import path from 'path';
import favicon from 'serve-favicon';
import compress from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import swagger from 'feathers-swagger';
import feathers from '@feathersjs/feathers';
import express from '@feathersjs/express';
import socketio from '@feathersjs/socketio';
import AgonesSDK from '@google-cloud/agones-sdk';
import { Application } from '@xr3ngine/server-core/declarations';
import logger from '@xr3ngine/server-core/src/logger';
import channels from './channels';
import authentication from '@xr3ngine/server-core/src/user/authentication';
import config from '@xr3ngine/server-core/src/appconfig';
import sync from 'feathers-sync';
import { api } from '@xr3ngine/server-core/src/k8s';
import { WebRTCGameServer } from "./WebRTCGameServer";
import winston from 'winston';
import feathersLogger from 'feathers-logger';
import { EventEmitter } from 'events';
import services from '@xr3ngine/server-core/src/services';
import sequelize from '@xr3ngine/server-core/src/sequelize';

const emitter = new EventEmitter();

// Don't remove this comment. It's needed to format import lines nicely.

const app = express(feathers()) as Application;
const agonesSDK = new AgonesSDK();

app.set('nextReadyEmitter', emitter);

if (config.gameserver.enabled) {
  try {
    app.configure(
        swagger({
          docsPath: '/openapi',
          docsJsonPath: '/openapi.json',
          uiIndex: path.join(process.cwd() + '/openapi.html'),
          // TODO: Relate to server config, don't hardcode this here
          specs: {
            info: {
              title: 'XR3ngine API Surface',
              description: 'APIs for the XR3ngine application',
              version: '1.0.0'
            },
            schemes:['https'],
            securityDefinitions: {
              bearer: {
                type: 'apiKey',
                in: 'header',
                name: 'authorization'
              }
            },
            security: [
              { bearer: [] }
            ],
          }
        })
    );
    

    app.set('paginate', config.server.paginate);
    app.set('authentication', config.authentication);

    app.configure(sequelize);

    // Enable security, CORS, compression, favicon and body parsing
    app.use(helmet());
    app.use(cors(
        {
          origin: true,
          credentials: true
        }
    ));
    app.use(compress());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(favicon(path.join(config.server.publicDir, 'favicon.ico')));

    // Set up Plugins and providers
    app.configure(express.rest());
    app.configure(socketio({
      serveClient: false,
      handlePreflightRequest: (req: any, res: any) => {
        // Set CORS headers
        if (res != null) {
          res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
          res.setHeader('Access-Control-Request-Method', '*');
          res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET`');
          res.setHeader('Access-Control-Allow-Headers', '*');
          res.writeHead(200);
          res.end();
        }
      }
    }, (io) => {
      io.use((socket, next) => {
        (socket as any).feathers.socketQuery = socket.handshake.query;
        (socket as any).socketQuery = socket.handshake.query;
        next();
      });
    }));

    if (config.redis.enabled) {
      app.configure(sync({
        uri: config.redis.password != null ? `redis://${config.redis.address}:${config.redis.port}?password=${config.redis.password}` : `redis://${config.redis.address}:${config.redis.port}`
      }));

      (app as any).sync.ready.then(() => {
        logger.info('Feathers-sync started');
      });
    }

    // Configure other middleware (see `middleware/index.js`)
    app.configure(authentication);
    // Set up our services (see `services/index.js`)

    app.configure(feathersLogger(winston));
    app.configure(services);

    // Host the public folder
    // Configure a middleware for 404s and the error handler

    // Host the public folder
    // Configure a middleware for 404s and the error handler

    if (config.gameserver.mode === 'realtime') {
      (app as any).k8AgonesClient = api({
        endpoint: `https://${process.env.KUBERNETES_SERVICE_HOST}:${process.env.KUBERNETES_PORT_443_TCP_PORT}`,
        version: '/apis/agones.dev/v1',
        auth: {
          caCert: fs.readFileSync('/var/run/secrets/kubernetes.io/serviceaccount/ca.crt'),
          token: fs.readFileSync('/var/run/secrets/kubernetes.io/serviceaccount/token')
        }
      });
      (app as any).k8DefaultClient = api({
        endpoint: `https://${process.env.KUBERNETES_SERVICE_HOST}:${process.env.KUBERNETES_PORT_443_TCP_PORT}`,
        version: '/api/v1',
        auth: {
          caCert: fs.readFileSync('/var/run/secrets/kubernetes.io/serviceaccount/ca.crt'),
          token: fs.readFileSync('/var/run/secrets/kubernetes.io/serviceaccount/token')
        }
      });
    }

    if ((process.env.KUBERNETES === 'true') || process.env.NODE_ENV === 'development' || config.gameserver.mode === 'local') {
      agonesSDK.connect();
      agonesSDK.ready().catch((err) => {
        throw new Error('\x1b[33mError: Agones is not running!. If you are in local development, please run xr3ngine/scripts/sh start-agones.sh and restart server\x1b[0m');
      });    

      (app as any).agonesSDK = agonesSDK;
      setInterval(() => agonesSDK.health(), 1000);

      // Create new gameserver instance
      const gameServer = new WebRTCGameServer(app);
      gameServer.initialize().then(() => {
        // Set up event channels (see channels.js)
        app.configure(channels);
      });
      console.log("Created new gameserver instance");
    } else {
      console.warn('Did not create gameserver');
    }

    app.use('/healthcheck', (req, res) => {
      res.sendStatus(200);
    });
  } catch(err) {
    console.log('Server init failure');
    console.log(err);
  }
}

app.use(express.errorHandler({ logger } as any));

process.on('exit', async () => {
  console.log('Server EXIT');

});

process.on('SIGTERM', async (err) => {
  console.log('Server SIGTERM');
  console.log(err);
});
process.on('SIGINT', () => {
  console.log('RECEIVED SIGINT');
  process.exit();
});

//emitted when an uncaught JavaScript exception bubbles
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION');
  console.log(err);
  process.exit();
});

//emitted whenever a Promise is rejected and no error handler is attached to it
process.on('unhandledRejection', (reason, p) => {
  console.log('UNHANDLED REJECTION');
  console.log(reason);
  console.log(p);
  process.exit();
});

export default app;