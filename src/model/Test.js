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
    root.TestRtcApi.Test = factory(root.TestRtcApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Test model module.
   * @module model/Test
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Test</code>.
   * A Test holds all the necessary elements that hold a test that can be executed in testRTC
   * @alias module:model/Test
   * @class
   * @param testId
   * @param name
   * @param concurrentUsers
   * @param iterations
   * @param script
   */
  var exports = function(testId, name, concurrentUsers, iterations, script) {

    this['testId'] = testId;
    this['name'] = name;

    this['concurrentUsers'] = concurrentUsers;
    this['iterations'] = iterations;


    this['script'] = script;
  };

  /**
   * Constructs a <code>Test</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Test} obj Optional instance to populate.
   * @return {module:model/Test} The populated <code>Test</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('testId')) {
        obj['testId'] = ApiClient.convertToType(data['testId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('concurrentUsers')) {
        obj['concurrentUsers'] = ApiClient.convertToType(data['concurrentUsers'], 'Integer');
      }
      if (data.hasOwnProperty('iterations')) {
        obj['iterations'] = ApiClient.convertToType(data['iterations'], 'Integer');
      }
      if (data.hasOwnProperty('runOptions')) {
        obj['runOptions'] = ApiClient.convertToType(data['runOptions'], 'String');
      }
      if (data.hasOwnProperty('serviceUrl')) {
        obj['serviceUrl'] = ApiClient.convertToType(data['serviceUrl'], 'String');
      }
      if (data.hasOwnProperty('script')) {
        obj['script'] = ApiClient.convertToType(data['script'], 'String');
      }
    }
    return obj;
  }


  /**
   * The unique identity of the test
   * @member {String} testId
   */
  exports.prototype['testId'] = undefined;

  /**
   * The readable name given to the test
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * A verbose description for the test
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * Number of concurrent browser agents used in this test
   * @member {Integer} concurrentUsers
   */
  exports.prototype['concurrentUsers'] = undefined;

  /**
   * Number of iterations this test is doing
   * @member {Integer} iterations
   */
  exports.prototype['iterations'] = undefined;

  /**
   * The tagged run options configured for this test
   * @member {String} runOptions
   */
  exports.prototype['runOptions'] = undefined;

  /**
   * The SERVICE_URL configured for this test
   * @member {String} serviceUrl
   */
  exports.prototype['serviceUrl'] = undefined;

  /**
   * The test script itself
   * @member {String} script
   */
  exports.prototype['script'] = undefined;




  return exports;
}));
