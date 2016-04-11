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
    root.TestRtcApi.Error = factory(root.TestRtcApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Error model module.
   * @module model/Error
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Error</code>.
   * @alias module:model/Error
   * @class
   * @param code
   * @param message
   */
  var exports = function(code, message) {

    this['code'] = code;
    this['message'] = message;
  };

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Integer');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} code
   */
  exports.prototype['code'] = undefined;

  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;




  return exports;
}));
