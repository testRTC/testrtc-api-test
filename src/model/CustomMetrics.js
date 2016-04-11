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
    root.TestRtcApi.CustomMetrics = factory(root.TestRtcApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CustomMetrics model module.
   * @module model/CustomMetrics
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CustomMetrics</code>.
   * A custom metric value, provided by the customer
   * @alias module:model/CustomMetrics
   * @class
   * @param name
   * @param value
   */
  var exports = function(name, value) {

    this['name'] = name;
    this['value'] = value;
  };

  /**
   * Constructs a <code>CustomMetrics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomMetrics} obj Optional instance to populate.
   * @return {module:model/CustomMetrics} The populated <code>CustomMetrics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }


  /**
   * The customer-given name for the metric. This is used as a unique identifier when aggregating metric values across a test run
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * The value of the custom metric
   * @member {String} value
   */
  exports.prototype['value'] = undefined;




  return exports;
}));
