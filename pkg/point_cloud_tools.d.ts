/* tslint:disable */
/* eslint-disable */
/**
* Transform static feature into multiple timestamps
*
* # Arguments
*
* * `feature_json` - JSON encoded feature
* * `ego_vehicle_poses_json` - JSON encoded dictionary with string timestamps as keys and ego
*     vehicle poses as values
*
* See unit tests for this function for example arguments.
*
* # Returns
* Features per timestamp
* @param {string} features_json
* @param {string} frames_json
* @param {string} ego_vehicle_poses_json
* @returns {any}
*/
export function transform_feature(features_json: string, frames_json: string, ego_vehicle_poses_json: string): any;
