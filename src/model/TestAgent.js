(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Channels', './CustomMetrics', './TestAgentBrowser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Channels'), require('./CustomMetrics'), require('./TestAgentBrowser'));
  } else {
    // Browser globals (root is window)
    if (!root.TestRtcApi) {
      root.TestRtcApi = {};
    }
    root.TestRtcApi.TestAgent = factory(root.TestRtcApi.ApiClient, root.TestRtcApi.Channels, root.TestRtcApi.CustomMetrics, root.TestRtcApi.TestAgentBrowser);
  }
}(this, function(ApiClient, Channels, CustomMetrics, TestAgentBrowser) {
  'use strict';

  /**
   * The TestAgent model module.
   * @module model/TestAgent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TestAgent</code>.
   * A TestAgent object holds the reported statistics of a specific browser agent used in a given TestRun.
   * @alias module:model/TestAgent
   * @class
   */
  var exports = function() {



















  };

  /**
   * Constructs a <code>TestAgent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TestAgent} obj Optional instance to populate.
   * @return {module:model/TestAgent} The populated <code>TestAgent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('testAgentId')) {
        obj['testAgentId'] = ApiClient.convertToType(data['testAgentId'], 'String');
      }
      if (data.hasOwnProperty('testRunId')) {
        obj['testRunId'] = ApiClient.convertToType(data['testRunId'], 'String');
      }
      if (data.hasOwnProperty('testId')) {
        obj['testId'] = ApiClient.convertToType(data['testId'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('machine')) {
        obj['machine'] = ApiClient.convertToType(data['machine'], 'String');
      }
      if (data.hasOwnProperty('os')) {
        obj['os'] = ApiClient.convertToType(data['os'], 'String');
      }
      if (data.hasOwnProperty('browser')) {
        obj['browser'] = TestAgentBrowser.constructFromObject(data['browser']);
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('networkProfile')) {
        obj['networkProfile'] = ApiClient.convertToType(data['networkProfile'], 'String');
      }
      if (data.hasOwnProperty('firewallProfile')) {
        obj['firewallProfile'] = ApiClient.convertToType(data['firewallProfile'], 'String');
      }
      if (data.hasOwnProperty('mediaFile')) {
        obj['mediaFile'] = ApiClient.convertToType(data['mediaFile'], 'String');
      }
      if (data.hasOwnProperty('agentIdx')) {
        obj['agentIdx'] = ApiClient.convertToType(data['agentIdx'], 'Integer');
      }
      if (data.hasOwnProperty('sessionIdx')) {
        obj['sessionIdx'] = ApiClient.convertToType(data['sessionIdx'], 'Integer');
      }
      if (data.hasOwnProperty('inSessionIdx')) {
        obj['inSessionIdx'] = ApiClient.convertToType(data['inSessionIdx'], 'Integer');
      }
      if (data.hasOwnProperty('startTime')) {
        obj['startTime'] = ApiClient.convertToType(data['startTime'], 'String');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Integer');
      }
      if (data.hasOwnProperty('customMetrics')) {
        obj['customMetrics'] = ApiClient.convertToType(data['customMetrics'], [CustomMetrics]);
      }
      if (data.hasOwnProperty('channels')) {
        obj['channels'] = ApiClient.convertToType(data['channels'], [Channels]);
      }
    }
    return obj;
  }


  /**
   * The unique identifier of a test agent used in a test run. This value is unique across the testRTC service
   * @member {String} testAgentId
   */
  exports.prototype['testAgentId'] = undefined;

  /**
   * The unique identifier of the test run this test agent was used in
   * @member {String} testRunId
   */
  exports.prototype['testRunId'] = undefined;

  /**
   * The unique identifier of the test that was executed by this agent
   * @member {String} testId
   */
  exports.prototype['testId'] = undefined;

  /**
   * The result status of the test. Can be 'success', 'warning' or 'failure'
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * The type of the machine used by this test agent
   * @member {String} machine
   */
  exports.prototype['machine'] = undefined;

  /**
   * The operating system used by this test agent
   * @member {String} os
   */
  exports.prototype['os'] = undefined;

  /**
   * @member {module:model/TestAgentBrowser} browser
   */
  exports.prototype['browser'] = undefined;

  /**
   * The data center this test agent was running from
   * @member {String} location
   */
  exports.prototype['location'] = undefined;

  /**
   * The network profile used by this test agent
   * @member {String} networkProfile
   */
  exports.prototype['networkProfile'] = undefined;

  /**
   * The firewall profile used by this test agent
   * @member {String} firewallProfile
   */
  exports.prototype['firewallProfile'] = undefined;

  /**
   * The media file used by this test agent
   * @member {String} mediaFile
   */
  exports.prototype['mediaFile'] = undefined;

  /**
   * The index of this agent within the test run. Starts from 1
   * @member {Integer} agentIdx
   */
  exports.prototype['agentIdx'] = undefined;

  /**
   * The index of this agent's session within the test run. Starts from 1
   * @member {Integer} sessionIdx
   */
  exports.prototype['sessionIdx'] = undefined;

  /**
   * The index of this agent within the session. Starts from 1
   * @member {Integer} inSessionIdx
   */
  exports.prototype['inSessionIdx'] = undefined;

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
   * An array of custom metrics added by the customer to this agent's test results
   * @member {Array.<module:model/CustomMetrics>} customMetrics
   */
  exports.prototype['customMetrics'] = undefined;

  /**
   * Channels created in this test run
   * @member {Array.<module:model/Channels>} channels
   */
  exports.prototype['channels'] = undefined;




  return exports;
}));
