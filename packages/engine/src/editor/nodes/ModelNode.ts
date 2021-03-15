import { Box3, Sphere, PropertyBinding } from "three";
import Model from "../../scene/classes/Model";
import EditorNodeMixin from "./EditorNodeMixin";
import { setStaticMode, StaticModes } from "../functions/StaticMode";
import cloneObject3D from "../functions/cloneObject3D";
import { RethrownError } from "../functions/errors";
import {
  getObjectPerfIssues,
  maybeAddLargeFileIssue
} from "../functions/performance";
import { LoadGLTF } from "../../assets/functions/LoadGLTF";
export default class ModelNode extends EditorNodeMixin(Model) {
  static nodeName = "Model";
  static legacyComponentName = "gltf-model";
  static initialElementProps = {
    initialScale: "fit",
    src: ""
  };

  meshColliders = []

  static async deserialize(editor, json, loadAsync, onError) {
    const node = await super.deserialize(editor, json);
    loadAsync(
      (async () => {
        const { src, attribution } = json.components.find(
          c => c.name === "gltf-model"
        ).props;

        await node.load(src, onError);
        // Legacy, might be a raw string left over before switch to JSON.
        if (attribution && typeof attribution === "string") {
          const [name, author] = attribution.split(" by ");
          node.attribution = { name, author };
        } else {
          node.attribution = attribution;
        }
        node.collidable = !!json.components.find(c => c.name === "collidable");
        node.walkable = !!json.components.find(c => c.name === "walkable");
        const loopAnimationComponent = json.components.find(
          c => c.name === "loop-animation"
        );
        if (loopAnimationComponent && loopAnimationComponent.props) {
          const { clip, activeClipIndex } = loopAnimationComponent.props;
          if (activeClipIndex !== undefined) {
            node.activeClipIndex = loopAnimationComponent.props.activeClipIndex;
          } else if (
            clip !== undefined &&
            node.model &&
            node.model.animations
          ) {
            // DEPRECATED: Old loop-animation component stored the clip name rather than the clip index
            // node.activeClipIndex = node.model.animations.findIndex(
            //   animation => animation.name === clip
            // );
            const clipIndex = node.model.animations.findIndex(animation => animation.name === clip);

            if (clipIndex !== -1) {
              node.activeClipIndices = [clipIndex];
            }
          }
        }
        const shadowComponent = json.components.find(c => c.name === "shadow");
        if (shadowComponent) {
          node.castShadow = shadowComponent.props.cast;
          node.receiveShadow = shadowComponent.props.receive;
        }
        const ineractableComponent = json.components.find(c => c.name === "interact");

        if(ineractableComponent){
          node.interactable = ineractableComponent.props.interactable;
          node.interactionType = ineractableComponent.props.interactionType;
          node.interactionText = ineractableComponent.props.interactionText;
          node.payloadName = ineractableComponent.props.payloadName;
          node.payloadUrl = ineractableComponent.props.payloadUrl;
          node.payloadBuyUrl = ineractableComponent.props.payloadBuyUrl;
          node.payloadLearnMoreUrl = ineractableComponent.props.payloadLearnMoreUrl;
          node.payloadHtmlContent = ineractableComponent.props.payloadHtmlContent;
          node.payloadUrl = ineractableComponent.props.payloadUrl;
        }
      })()
    );
    return node;
  }
  constructor(editor) {
    super(editor);
    this.attribution = null;
    this._canonicalUrl = "";
    this.collidable = true;
    this.walkable = true;
    this.initialScale = 1;
    this.boundingBox = new Box3();
    this.boundingSphere = new Sphere();
    this.gltfJson = null;
  }
  // Overrides Model's src property and stores the original (non-resolved) url.
  get src(): string {
    return this._canonicalUrl;
  }
  // When getters are overridden you must also override the setter.
  set src(value: string) {
    this.load(value).catch(console.error);
  }
  // Overrides Model's loadGLTF method and uses the Editor's gltf cache.
  async loadGLTF(src) {
    const loadPromise = this.editor.gltfCache.get(src);
    const{ scene, json} = await loadPromise;
    this.gltfJson = json;
    const clonedScene = cloneObject3D(scene);
    return clonedScene;
  }
  // Overrides Model's load method and resolves the src url before loading.
  async load(src, onError?) {
    if(src.startsWith('/')) {
      src = window.location.origin + src;
    }
    const nextSrc = src || "";
    if (nextSrc === this._canonicalUrl && nextSrc !== "") {
      return;
    }
    this._canonicalUrl = nextSrc;
    this.attribution = null;
    this.issues = [];
    this.gltfJson = null;
    if (this.model) {
      this.editor.renderer.removeBatchedObject(this.model);
      this.remove(this.model);
      this.model = null;
    }
    this.hideErrorIcon();
    try {
      console.log("Try");

      const { accessibleUrl, files } = await this.editor.api.resolveMedia(src);
      if (this.model) {
        this.editor.renderer.removeBatchedObject(this.model);
      }
      await super.load(accessibleUrl);
      if (this.model) {
        // Set up colliders
        const colliders = []

          const parseColliders = ( mesh ) => {
            if (mesh.userData.data === 'physics' || mesh.userData.data === 'dynamic' || mesh.userData.data === 'vehicle') {
             //mesh.userData.type == "trimesh"
                const meshCollider = {
                    type: mesh.userData.type,
                    position: {
                      x: mesh.position.x,
                      y: mesh.position.y,
                      z: mesh.position.z
                    },
                    quaternion: {
                      x: mesh.quaternion.x,
                      y: mesh.quaternion.y,
                      z: mesh.quaternion.z,
                      w: mesh.quaternion.w
                    },
                    scale: {
                      x: mesh.scale.x,
                      y: mesh.scale.y,
                      z: mesh.scale.z
                    },
                  //  vertices: (mesh.userData.type == "trimesh" ? mesh.geometry.attributes.position.array: null) //count
                  }
                colliders.push(meshCollider);
             }
          }
          this.model.traverse( parseColliders );
          console.warn(colliders);
          this.meshColliders = colliders;
          //this.editor.renderer.addBatchedObject(this.model);
        }

      if (this.initialScale === "fit") {
        this.scale.set(1, 1, 1);
        if (this.model) {
          this.updateMatrixWorld();
          this.boundingBox.setFromObject(this.model);
          this.boundingBox.getBoundingSphere(this.boundingSphere);
          const diameter = this.boundingSphere.radius * 2;
          if ((diameter > 1000 || diameter < 0.1) && diameter !== 0) {
            // Scale models that are too big or to small to fit in a 1m bounding sphere.
            const scaleFactor = 1 / diameter;
            this.scale.set(scaleFactor, scaleFactor, scaleFactor);
          } else if (diameter > 20) {
            // If the bounding sphere of a model is over 20m in diameter, assume that the model was
            // exported with units as centimeters and convert to meters.
            this.scale.set(0.01, 0.01, 0.01);
          }
        }
        // Clear scale to fit property so that the swapped model maintains the same scale.
        this.initialScale = 1;
      } else {
        this.scale.multiplyScalar(this.initialScale);
        this.initialScale = 1;
      }
      if (this.model) {
        this.model.traverse(object => {
          if (object.material && object.material.isMeshStandardMaterial) {
            object.material.envMap = this.editor.scene.environmentMap;
            object.material.needsUpdate = true;
          }
        });
        this.issues = getObjectPerfIssues(this.model);
      }
      this.updateStaticModes();
    } catch (error) {
      this.showErrorIcon();
      const modelError = new RethrownError(
        `Error loading model "${this._canonicalUrl}"`,
        error
      );
      if (onError) {
        onError(this, modelError);
      }
      console.error(modelError);
      this.issues.push({ severity: "error", message: "Error loading model." });
      this._canonicalUrl = "";
    }
    this.editor.emit("objectsChanged", [this]);
    this.editor.emit("selectionChanged");
    // this.hideLoadingCube();
    return this;
  }
  onAdd() {
    if (this.model) {
      this.editor.renderer.addBatchedObject(this.model);
    }
  }
  onRemove() {
    if (this.model) {
      this.editor.renderer.removeBatchedObject(this.model);
    }
  }
  onPlay() {
    this.playAnimation();
  }
  onPause() {
    this.stopAnimation();
  }
  onUpdate(dt) {
    super.onUpdate(dt);
    if (this.editor.playing) {
      this.update(dt);
    }
  }
  addEditorParametersToCollider(collider) {
    collider.position.x += this.position.x
    collider.position.y += this.position.y
    collider.position.z += this.position.z

    collider.scale.x *= this.scale.x
    collider.scale.y *= this.scale.y
    collider.scale.z *= this.scale.z
    // quaternion
    // scale
    return collider
  }
  updateStaticModes() {
    if (!this.model) return;
    setStaticMode(this.model, StaticModes.Static);
    if (this.model.animations && this.model.animations.length > 0) {
      for (const animation of this.model.animations) {
        for (const track of animation.tracks) {
          const { nodeName: uuid } = PropertyBinding.parseTrackName(track.name);
          const animatedNode = this.model.getObjectByProperty("uuid", uuid);
          if (!animatedNode) {
            throw new Error(
              `Model.updateStaticModes: model with url "${
                this._canonicalUrl
              }" has an invalid animation "${animation.name}"`
            );
          }
          setStaticMode(animatedNode, StaticModes.Dynamic);
        }
      }
    }
  }
  serialize() {
    const components = {
      "gltf-model": {
        src: this._canonicalUrl,
        attribution: this.attribution
      },
      shadow: {
        cast: this.castShadow,
        receive: this.receiveShadow
      },
      interact: {
        interactable: this.interactable,
        interactionType : this.interactionType,
        interactionText : this.interactionText,
        payloadName : this.payloadName,
        payloadUrl : this.payloadUrl,
        payloadBuyUrl : this.payloadBuyUrl,
        payloadLearnMoreUrl : this.payloadLearnMoreUrl,
        payloadHtmlContent : this.payloadHtmlContent,
        payloadModelUrl : this._canonicalUrl,
      }
    };
    for(let i = 0; i < this.meshColliders.length; i++) {
      components[`mesh-collider-${i}`] = this.addEditorParametersToCollider(this.meshColliders[i]);
    }
    if (this.activeClipIndex !== -1) {
      components["loop-animation"] = {
        activeClipIndex: this.activeClipIndex
      };
    }
    if (this.collidable) {
      components["collidable"] = {};
    }
    if (this.walkable) {
      components["walkable"] = {};
    }
    return super.serialize(components);
  }
  copy(source, recursive = true) {
    super.copy(source, recursive);
    if (source.loadingCube) {
      this.initialScale = source.initialScale;
      this.load(source.src);
    } else {
      this.updateStaticModes();
      this.gltfJson = source.gltfJson;
      this._canonicalUrl = source._canonicalUrl;
    }
    this.attribution = source.attribution;
    this.collidable = source.collidable;
    this.walkable = source.walkable;
    return this;
  }
  // @ts-ignore
  prepareForExport(ctx) {
    super.prepareForExport();
    this.addGLTFComponent("shadow", {
      cast: this.castShadow,
      receive: this.receiveShadow
    });
    // TODO: Support exporting more than one active clip.
    if (this.activeClip) {
      const activeClipIndex = ctx.animations.indexOf(this.activeClip);
      if (activeClipIndex === -1) {
        throw new Error(
          `Error exporting model "${this.name}" with url "${
            this._canonicalUrl
          }". Animation could not be found.`
        );
      } else {
        this.addGLTFComponent("loop-animation", {
          activeClipIndex: activeClipIndex
        });
      }
    }
  }
}
