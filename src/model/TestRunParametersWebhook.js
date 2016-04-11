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
    root.TestRtcApi.TestRunParametersWebhook = factory(root.TestRtcApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TestRunParametersWebhook model module.
   * @module model/TestRunParametersWebhook
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TestRunParametersWebhook</code>.
   * The Webhook is used to call the customer&#39;s own API when an operation in testRTC&#39;s API completes.
   * @alias module:model/TestRunParametersWebhook
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>TestRunParametersWebhook</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TestRunParametersWebhook} obj Optional instance to populate.
   * @return {module:model/TestRunParametersWebhook} The populated <code>TestRunParametersWebhook</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('input')) {
        obj['input'] = ApiClient.convertToType(data['input'], Object);
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }


  /**
   * The value to pass to the URL
   * @member {Object} input
   */
  exports.prototype['input'] = undefined;

  /**
   * The URL to connect to using HTTP(S) GET when the operation completes
   * @member {String} url
   */
  exports.prototype['url'] = undefined;




  return exports;
}));
