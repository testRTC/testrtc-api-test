(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TestRunParametersExecutionParameters', './TestRunParametersWebhook'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TestRunParametersExecutionParameters'), require('./TestRunParametersWebhook'));
  } else {
    // Browser globals (root is window)
    if (!root.TestRtcApi) {
      root.TestRtcApi = {};
    }
    root.TestRtcApi.TestRunParameters = factory(root.TestRtcApi.ApiClient, root.TestRtcApi.TestRunParametersExecutionParameters, root.TestRtcApi.TestRunParametersWebhook);
  }
}(this, function(ApiClient, TestRunParametersExecutionParameters, TestRunParametersWebhook) {
  'use strict';

  /**
   * The TestRunParameters model module.
   * @module model/TestRunParameters
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TestRunParameters</code>.
   * TBD
   * @alias module:model/TestRunParameters
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>TestRunParameters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TestRunParameters} obj Optional instance to populate.
   * @return {module:model/TestRunParameters} The populated <code>TestRunParameters</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Webhook')) {
        obj['Webhook'] = TestRunParametersWebhook.constructFromObject(data['Webhook']);
      }
      if (data.hasOwnProperty('ExecutionParameters')) {
        obj['ExecutionParameters'] = TestRunParametersExecutionParameters.constructFromObject(data['ExecutionParameters']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/TestRunParametersWebhook} Webhook
   */
  exports.prototype['Webhook'] = undefined;

  /**
   * @member {module:model/TestRunParametersExecutionParameters} ExecutionParameters
   */
  exports.prototype['ExecutionParameters'] = undefined;




  return exports;
}));
