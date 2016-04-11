(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TestRtcApi) {
      root.TestRtcApi = {};
    }
    root.TestRtcApi.TestAgentBrowser = factory(root.TestRtcApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TestAgentBrowser model module.
   * @module model/TestAgentBrowser
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TestAgentBrowser</code>.
   * The browser used by this test agent
   * @alias module:model/TestAgentBrowser
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>TestAgentBrowser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TestAgentBrowser} obj Optional instance to populate.
   * @return {module:model/TestAgentBrowser} The populated <code>TestAgentBrowser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
    }
    return obj;
  }


  /**
   * The name of the browser used
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * The exact browser version used
   * @member {String} version
   */
  exports.prototype['version'] = undefined;




  return exports;
}));
