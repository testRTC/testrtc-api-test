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
    root.TestRtcApi.TestRun = factory(root.TestRtcApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TestRun model module.
   * @module model/TestRun
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TestRun</code>.
   * A TestRun object holds a specific test execution
   * @alias module:model/TestRun
   * @class
   */
  var exports = function() {












  };

  /**
   * Constructs a <code>TestRun</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TestRun} obj Optional instance to populate.
   * @return {module:model/TestRun} The populated <code>TestRun</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('testRunId')) {
        obj['testRunId'] = ApiClient.convertToType(data['testRunId'], 'String');
      }
      if (data.hasOwnProperty('testId')) {
        obj['testId'] = ApiClient.convertToType(data['testId'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('runType')) {
        obj['runType'] = ApiClient.convertToType(data['runType'], 'String');
      }
      if (data.hasOwnProperty('concurrentUsers')) {
        obj['concurrentUsers'] = ApiClient.convertToType(data['concurrentUsers'], 'Integer');
      }
      if (data.hasOwnProperty('totalSessions')) {
        obj['totalSessions'] = ApiClient.convertToType(data['totalSessions'], 'Integer');
      }
      if (data.hasOwnProperty('totalIncomingData')) {
        obj['totalIncomingData'] = ApiClient.convertToType(data['totalIncomingData'], 'Integer');
      }
      if (data.hasOwnProperty('totalOutgoingData')) {
        obj['totalOutgoingData'] = ApiClient.convertToType(data['totalOutgoingData'], 'Integer');
      }
      if (data.hasOwnProperty('startTime')) {
        obj['startTime'] = ApiClient.convertToType(data['startTime'], 'String');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Integer');
      }
      if (data.hasOwnProperty('agents')) {
        obj['agents'] = ApiClient.convertToType(data['agents'], ['String']);
      }
    }
    return obj;
  }


  /**
   * The unique identity of the TestRun object. Used as the key to access a test run.
   * @member {String} testRunId
   */
  exports.prototype['testRunId'] = undefined;

  /**
   * The unique identity of the Test object.
   * @member {String} testId
   */
  exports.prototype['testId'] = undefined;

  /**
   * The result status of the test. Can be 'success', 'warning' or 'failure'
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Can be either 'manual' or 'automated'
   * @member {String} runType
   */
  exports.prototype['runType'] = undefined;

  /**
   * The number of concurrent browser agents used in this test run
   * @member {Integer} concurrentUsers
   */
  exports.prototype['concurrentUsers'] = undefined;

  /**
   * The total number of WebRTC PeerConnection sessions conducted in this test run
   * @member {Integer} totalSessions
   */
  exports.prototype['totalSessions'] = undefined;

  /**
   * (in bytes) The total number of bytes received in the test by all browsers (as reported by the browsers' getstats() API call)
   * @member {Integer} totalIncomingData
   */
  exports.prototype['totalIncomingData'] = undefined;

  /**
   * (in bytes) The total number of bytes sent in the test by all browsers (as reported by the browsers' getstats() API call)
   * @member {Integer} totalOutgoingData
   */
  exports.prototype['totalOutgoingData'] = undefined;

  /**
   * The starting time of the test run
   * @member {String} startTime
   */
  exports.prototype['startTime'] = undefined;

  /**
   * (in seconds) The total duration of the test run
   * @member {Integer} duration
   */
  exports.prototype['duration'] = undefined;

  /**
   * The list of unique test agents used in the given test run. This can either be ID values or expanded TestAgent objects, depending on which API call was made and what parameters was passed to it.
   * @member {Array.<String>} agents
   */
  exports.prototype['agents'] = undefined;




  return exports;
}));
