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
    root.TestRtcApi.RemoteTestOptions = factory(root.TestRtcApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RemoteTestOptions model module.
   * @module model/RemoteTestOptions
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RemoteTestOptions</code>.
   * Remote test execution options
   * @alias module:model/RemoteTestOptions
   * @class
   * @param name {String} Test name
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;
  };

  /**
   * Constructs a <code>RemoteTestOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemoteTestOptions} obj Optional instance to populate.
   * @return {module:model/RemoteTestOptions} The populated <code>RemoteTestOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * Test name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


