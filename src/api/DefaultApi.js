(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Test', '../model/Error', '../model/TestAgent', '../model/TestRun', '../model/TestRunId', '../model/TestRunParameters', '../model/CustomMetrics'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Test'), require('../model/Error'), require('../model/TestAgent'), require('../model/TestRun'), require('../model/TestRunId'), require('../model/TestRunParameters'), require('../model/CustomMetrics'));
  } else {
    // Browser globals (root is window)
    if (!root.TestRtcApi) {
      root.TestRtcApi = {};
    }
    root.TestRtcApi.DefaultApi = factory(root.TestRtcApi.ApiClient, root.TestRtcApi.Test, root.TestRtcApi.Error, root.TestRtcApi.TestAgent, root.TestRtcApi.TestRun, root.TestRtcApi.TestRunId, root.TestRtcApi.TestRunParameters, root.TestRtcApi.CustomMetrics);
  }
}(this, function(ApiClient, Test, Error, TestAgent, TestRun, TestRunId, TestRunParameters, CustomMetrics) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the findTestById operation.
     * @callback module:api/DefaultApi~findTestByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Test} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * &amp;lt;p&amp;gt;Retrieve the information of a specific test.&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;&amp;lt;i&amp;gt;Additional fields will be returned in the future in the JSON once we model them nicely.&amp;lt;/i&amp;gt;&amp;lt;/p&amp;gt;
     * @param {String} testId ID of the test to fetch
     * @param {module:api/DefaultApi~findTestByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Test}
     */
    this.findTestById = function(testId, callback) {
      var postBody = null;

      // verify the required parameter 'testId' is set
      if (testId == undefined || testId == null) {
        throw "Missing the required parameter 'testId' when calling findTestById";
      }


      var pathParams = {
        'testId': testId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Test;

      return this.apiClient.callApi(
        '/tests/{testId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTestAgentById operation.
     * @callback module:api/DefaultApi~retrieveTestAgentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TestAgent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * &amp;lt;p&amp;gt;Retrieve report of a specific test agent information.&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;Each test run result is constructed out of the number of test agents used for running the test. This API retrieves the information from one specific test agent within a test run.&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;&amp;lt;i&amp;gt;Additional fields will be returned in the future in the JSON once we model them nicely.&amp;lt;/i&amp;gt;&amp;lt;/p&amp;gt;
     * @param {String} testAgentId ID of the test agent to fetch
     * @param {module:api/DefaultApi~retrieveTestAgentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TestAgent}
     */
    this.retrieveTestAgentById = function(testAgentId, callback) {
      var postBody = null;

      // verify the required parameter 'testAgentId' is set
      if (testAgentId == undefined || testAgentId == null) {
        throw "Missing the required parameter 'testAgentId' when calling retrieveTestAgentById";
      }


      var pathParams = {
        'testAgentId': testAgentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TestAgent;

      return this.apiClient.callApi(
        '/testagents/{testAgentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTestRunById operation.
     * @callback module:api/DefaultApi~retrieveTestRunByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TestRun} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * &amp;lt;p&amp;gt;Retrieve test run information.&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;&amp;lt;i&amp;gt;Additional fields will be returned in the future in the JSON once we model them nicely.&amp;lt;/i&amp;gt;&amp;lt;/p&amp;gt;
     * @param {String} testRunId ID of the test run to fetch
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.expand &lt;p&gt;Defaults to false. If set to true, the &#39;agents&#39; array returns the retrieve operation on the relevant testagents instead of their IDs only&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Not supported at this point(yet)&lt;/strong&gt;&lt;/p&gt;
     * @param {module:api/DefaultApi~retrieveTestRunByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TestRun}
     */
    this.retrieveTestRunById = function(testRunId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'testRunId' is set
      if (testRunId == undefined || testRunId == null) {
        throw "Missing the required parameter 'testRunId' when calling retrieveTestRunById";
      }


      var pathParams = {
        'testRunId': testRunId
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TestRun;

      return this.apiClient.callApi(
        '/testruns/{testRunId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the runTestById operation.
     * @callback module:api/DefaultApi~runTestByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TestRunId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * &amp;lt;p&amp;gt;Execute a specific test.&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;Once the test finishes, if a webhook is provided, the webhook will be called with the given input. To the input, a field called \u201CtestRunId\u201D will be added, with the ID of the test run result.&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;The webhook&amp;#39;s override can contain a list of key values of fields of the test that are overridden with specific values for this test. Fields that can be overridden are: concurrentUsers, iterations, runOptions, serviceUrl&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;&amp;lt;i&amp;gt;Additional fields will be returned in the future in the JSON once we model them nicely.&amp;lt;/i&amp;gt;&amp;lt;/p&amp;gt;
     * @param {String} testId ID of the test to fetch
     * @param {Object} opts Optional parameters
     * @param {module:model/TestRunParameters} opts.parameters If this webhook is provided, then it will be called once the test finishes. A field called &#39;testRunId&#39; will be added, with the ID of the test run
     * @param {module:api/DefaultApi~runTestByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TestRunId}
     */
    this.runTestById = function(testId, opts, callback) {
      opts = opts || {};
      var postBody = opts['parameters'];

      // verify the required parameter 'testId' is set
      if (testId == undefined || testId == null) {
        throw "Missing the required parameter 'testId' when calling runTestById";
      }


      var pathParams = {
        'testId': testId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TestRunId;

      return this.apiClient.callApi(
        '/tests/{testId}/run', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTestAgentMetricsById operation.
     * @callback module:api/DefaultApi~updateTestAgentMetricsByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomMetrics} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * &amp;lt;p&amp;gt;Add or update custom metrics of a specific test run agent.&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;This appends the custom metrics selected to the current metrics already in this run. If the same name is already in the test, its value will get updated.&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;This call returns the updated list of all custom metrics for the test upon success.&amp;lt;/p&amp;gt;
     * @param {String} testAgentId ID of the test agent to fetch
     * @param {module:model/CustomMetrics} metrics Metrics to update
     * @param {module:api/DefaultApi~updateTestAgentMetricsByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CustomMetrics}
     */
    this.updateTestAgentMetricsById = function(testAgentId, metrics, callback) {
      var postBody = metrics;

      // verify the required parameter 'testAgentId' is set
      if (testAgentId == undefined || testAgentId == null) {
        throw "Missing the required parameter 'testAgentId' when calling updateTestAgentMetricsById";
      }

      // verify the required parameter 'metrics' is set
      if (metrics == undefined || metrics == null) {
        throw "Missing the required parameter 'metrics' when calling updateTestAgentMetricsById";
      }


      var pathParams = {
        'testAgentId': testAgentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CustomMetrics;

      return this.apiClient.callApi(
        '/testagents/{testAgentId}/metrics', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
