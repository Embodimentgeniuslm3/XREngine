import { Behavior } from '../../common/interfaces/Behavior';
import { addColliderWithoutEntity } from '../../physics/behaviors/colliderCreateFunctions';

/**
 * @author HydraFire <github.com/HydraFire>
 */

export const createBoxCollider: Behavior = (entity, args: any) => {
  // console.log('****** Collider from Scene data, type: ', args);
  addColliderWithoutEntity(
    {type:args.objArgs.type},
    args.objArgs.position,
    args.objArgs.quaternion,
    args.objArgs.scale,
    {
      mesh: args.objArgs.mesh,
      vertices:  args.objArgs.vertices,
      indices:   args.objArgs.indices
    }
  );
};