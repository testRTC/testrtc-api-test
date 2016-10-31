/**
 * testRTC API
 * testRTC's API for WebRTC service monitoring and testing automation.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: contact@testrtc.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TestRtcApi) {
      root.TestRtcApi = {};
    }
    root.TestRtcApi.StatusPageRole = factory(root.TestRtcApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StatusPageRole model module.
   * @module model/StatusPageRole
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>StatusPageRole</code>.
   * The role of current environment
   * @alias module:model/StatusPageRole
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>StatusPageRole</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusPageRole} obj Optional instance to populate.
   * @return {module:model/StatusPageRole} The populated <code>StatusPageRole</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('web')) {
        obj['web'] = ApiClient.convertToType(data['web'], 'Boolean');
      }
      if (data.hasOwnProperty('remoteWorker')) {
        obj['remoteWorker'] = ApiClient.convertToType(data['remoteWorker'], 'Boolean');
      }
      if (data.hasOwnProperty('monitor')) {
        obj['monitor'] = ApiClient.convertToType(data['monitor'], 'Boolean');
      }
      if (data.hasOwnProperty('batchexec')) {
        obj['batchexec'] = ApiClient.convertToType(data['batchexec'], 'Boolean');
      }
      if (data.hasOwnProperty('api')) {
        obj['api'] = ApiClient.convertToType(data['api'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The value which indicates does current environment have role 'web'
   * @member {Boolean} web
   */
  exports.prototype['web'] = undefined;
  /**
   * The value which indicates does current environment have role 'remoteWorker'
   * @member {Boolean} remoteWorker
   */
  exports.prototype['remoteWorker'] = undefined;
  /**
   * The value which indicates does current environment have role 'monitor'
   * @member {Boolean} monitor
   */
  exports.prototype['monitor'] = undefined;
  /**
   * The value which indicates does current environment have role 'batchexec'
   * @member {Boolean} batchexec
   */
  exports.prototype['batchexec'] = undefined;
  /**
   * The value which indicates does current environment have role 'api'
   * @member {Boolean} api
   */
  exports.prototype['api'] = undefined;



  return exports;
}));

