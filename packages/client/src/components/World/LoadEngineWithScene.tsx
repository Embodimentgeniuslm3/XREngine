import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router'
import { initNetwork, loadLocation } from './LocationLoadHelper'
import { EngineActions, useEngineState } from '@xrengine/engine/src/ecs/classes/EngineService'
import { Engine } from '@xrengine/engine/src/ecs/classes/Engine'
import { SceneService, useSceneState } from '@xrengine/client-core/src/world/services/SceneService'
import { Downgraded } from '@hookstate/core'
import { InstanceConnectionService } from '@xrengine/client-core/src/common/services/InstanceConnectionService'
import { MediaStreamService } from '@xrengine/client-core/src/media/services/MediaStreamService'
import {
  LocationAction,
  LocationService,
  useLocationState
} from '@xrengine/client-core/src/social/services/LocationService'
import { useDispatch } from '@xrengine/client-core/src/store'
import { leave } from '@xrengine/client-core/src/transports/SocketWebRTCClientFunctions'
import { getWorldTransport } from '@xrengine/client-core/src/transports/SocketWebRTCClientTransport'
import { useWorld } from '@xrengine/engine/src/ecs/functions/SystemHooks'
import { InitializeOptions } from '@xrengine/engine/src/initializationOptions'
import { NetworkWorldAction } from '@xrengine/engine/src/networking/functions/NetworkWorldAction'
import { updateNearbyAvatars } from '@xrengine/engine/src/networking/systems/MediaStreamSystem'
import { useProjectState } from '@xrengine/client-core/src/common/services/ProjectService'
import { createEngine } from '@xrengine/engine/src/initializeEngine'
import { teleportToScene } from '@xrengine/engine/src/scene/functions/teleportToScene'
import matches from 'ts-matches'

const engineRendererCanvasId = 'engine-renderer-canvas'

const defaultEngineInitializeOptions = {
  physics: {
    simulationEnabled: false
  },
  systems: [
    {
      type: 'FIXED',
      systemModulePromise: import('@xrengine/client-core/src/systems/XRUILoadingSystem')
    },
    {
      type: 'FIXED',
      systemModulePromise: import('@xrengine/client-core/src/systems/AvatarUISystem')
    }
  ]
}

const canvasStyle = {
  zIndex: 0,
  width: '100%',
  height: '100%',
  position: 'fixed',
  WebkitUserSelect: 'none',
  pointerEvents: 'auto',
  userSelect: 'none'
} as React.CSSProperties

const canvas = <canvas id={engineRendererCanvasId} style={canvasStyle} />

interface Props {
  engineInitializeOptions?: InitializeOptions
  setLoadingItemCount?: any
}

export const LoadEngineWithScene = (props: Props) => {
  const locationState = useLocationState()
  const history = useHistory()
  const dispatch = useDispatch()
  const engineState = useEngineState()
  const sceneState = useSceneState()
  const projectState = useProjectState()

  /**
   * Fetch projects so we know what we need to load into the engine
   */
  useEffect(() => {
    initNetwork()
  }, [])

  /**
   * Once we know what projects we need, initialise the engine.
   */
  useEffect(() => {
    // We assume that the number of projects will always be greater than 0 as the default project is assumed un-deletable
    if (!Engine.isInitialized && !Engine.isLoading && projectState.projects.value.length > 0) {
      const engineInitializeOptions = Object.assign({}, defaultEngineInitializeOptions, props.engineInitializeOptions)
      engineInitializeOptions.projects = projectState.projects.value.map((project) => project.name)
      createEngine().then(() => {
        useWorld().receptors.push((action) => {
          matches(action)
            .when(NetworkWorldAction.createClient.matches, () => {
              console.log('CLIENT RECEPTORS', action)
              updateNearbyAvatars()
              MediaStreamService.triggerUpdateNearbyLayerUsers()
            })
            .when(NetworkWorldAction.destroyClient.matches, () => {
              console.log('CLIENT RECEPTORS', action)
              updateNearbyAvatars()
              MediaStreamService.triggerUpdateNearbyLayerUsers()
            })
        })
      })
    }
  }, [projectState.projects.value])

  /**
   * Once we have the scene and the engine is loaded, load the location
   */
  useEffect(() => {
    if (locationState.currentLocation.location.sceneId.value && engineState.isEngineInitialized.value) {
      const [project, scene] = locationState.currentLocation.location.sceneId.value.split('/')
      SceneService.getSceneData(project, scene)
    }
  }, [locationState.currentLocation.location.sceneId.value, engineState.isEngineInitialized.value])

  /**
   * Once we have the scene data, initialise the engine
   */
  useEffect(() => {
    if (locationState.currentLocation.location.sceneId.value && sceneState.currentScene.value) {
      dispatch(EngineActions.setTeleporting(null!))
      const [project] = locationState.currentLocation.location.sceneId.value.split('/')
      loadLocation(project, sceneState.currentScene.scene.attach(Downgraded).value!)
    }
  }, [locationState.currentLocation?.location?.sceneId?.value, sceneState.currentScene?.scene?.value])

  const canTeleport = useRef(true)
  useEffect(() => {
    if (engineState.isTeleporting.value === null) {
      canTeleport.current = true
      return
    } else {
      if (!canTeleport.current) return
      dispatch(LocationAction.fetchingCurrentSocialLocation())

      // TODO: this needs to be implemented on the server too
      // if (slugifiedNameOfCurrentLocation === portalComponent.location) {
      //   teleportPlayer(
      //     useWorld().localClientEntity,
      //     portalComponent.remoteSpawnPosition,
      //     portalComponent.remoteSpawnRotation
      //   )
      //   return
      // }

      // shut down connection with existing GS
      console.log('reseting connection for portal teleport')
      leave(getWorldTransport())
      InstanceConnectionService.resetInstanceServer()
      const portalComponent = engineState.isTeleporting.value
      teleportToScene(portalComponent, async () => {
        history.push('/location/' + portalComponent.location)
        LocationService.getLocationByName(portalComponent.location)
        //canTeleport.current=true
      })
      canTeleport.current = false
    }
  }, [engineState.isTeleporting.value])

  return canvas
}
