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
    root.TestRtcApi.TestRunParametersExecutionParameters = factory(root.TestRtcApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TestRunParametersExecutionParameters model module.
   * @module model/TestRunParametersExecutionParameters
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TestRunParametersExecutionParameters</code>.
   * &lt;p&gt;A list of key values of fields of the test that are overridden with specific values for this test. Fields that can be overridden are:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;concurrentUsers&lt;/li&gt;&lt;li&gt;iterations&lt;/li&gt;&lt;li&gt;runOptions&lt;/li&gt;&lt;li&gt;serviceUrl&lt;/li&gt;&lt;/ul&gt;
   * @alias module:model/TestRunParametersExecutionParameters
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>TestRunParametersExecutionParameters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TestRunParametersExecutionParameters} obj Optional instance to populate.
   * @return {module:model/TestRunParametersExecutionParameters} The populated <code>TestRunParametersExecutionParameters</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('concurrentUsers')) {
        obj['concurrentUsers'] = ApiClient.convertToType(data['concurrentUsers'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * The number of concurrent browser agents used in this test run
   * @member {Integer} concurrentUsers
   */
  exports.prototype['concurrentUsers'] = undefined;




  return exports;
}));
