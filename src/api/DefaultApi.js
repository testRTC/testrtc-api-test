/**
 * testRTC API
 * testRTC's API for WebRTC service monitoring and testing automation.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: contact@testrtc.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Test', 'model/Error', 'model/StatusPage', 'model/TestAgent', 'model/TestRun', 'model/TestRunId', 'model/RemoteTestOptions', 'model/TestRunParameters', 'model/GetStatsChunk', 'model/BlobUploadResult', 'model/CustomMetrics'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Test'), require('../model/Error'), require('../model/StatusPage'), require('../model/TestAgent'), require('../model/TestRun'), require('../model/TestRunId'), require('../model/RemoteTestOptions'), require('../model/TestRunParameters'), require('../model/GetStatsChunk'), require('../model/BlobUploadResult'), require('../model/CustomMetrics'));
  } else {
    // Browser globals (root is window)
    if (!root.TestRtcApi) {
      root.TestRtcApi = {};
    }
    root.TestRtcApi.DefaultApi = factory(root.TestRtcApi.ApiClient, root.TestRtcApi.Test, root.TestRtcApi.Error, root.TestRtcApi.StatusPage, root.TestRtcApi.TestAgent, root.TestRtcApi.TestRun, root.TestRtcApi.TestRunId, root.TestRtcApi.RemoteTestOptions, root.TestRtcApi.TestRunParameters, root.TestRtcApi.GetStatsChunk, root.TestRtcApi.BlobUploadResult, root.TestRtcApi.CustomMetrics);
  }
}(this, function(ApiClient, Test, Error, StatusPage, TestAgent, TestRun, TestRunId, RemoteTestOptions, TestRunParameters, GetStatsChunk, BlobUploadResult, CustomMetrics) {
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
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
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
     * &lt;p&gt;Retrieve the information of a specific test.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Additional fields will be returned in the future in the JSON once we model them nicely.&lt;/i&gt;&lt;/p&gt;
     * @param {String} testId ID of the test to fetch
     * @param {module:api/DefaultApi~findTestByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Test}
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

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Test;

      return this.apiClient.callApi(
        '/tests/{testId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gerServiceSatatus operation.
     * @callback module:api/DefaultApi~gerServiceSatatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusPage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * &lt;p&gt;Get service status.&lt;/p&gt;
     * @param {module:api/DefaultApi~gerServiceSatatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StatusPage}
     */
    this.gerServiceSatatus = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StatusPage;

      return this.apiClient.callApi(
        '/status-page', 'GET',
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
     * &lt;p&gt;Retrieve report of a specific test agent information.&lt;/p&gt;&lt;p&gt;Each test run result is constructed out of the number of test agents used for running the test. This API retrieves the information from one specific test agent within a test run.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Additional fields will be returned in the future in the JSON once we model them nicely.&lt;/i&gt;&lt;/p&gt;
     * @param {String} testAgentId ID of the test agent to fetch
     * @param {module:api/DefaultApi~retrieveTestAgentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TestAgent}
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

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
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
     * &lt;p&gt;Retrieve test run information.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Additional fields will be returned in the future in the JSON once we model them nicely.&lt;/i&gt;&lt;/p&gt;
     * @param {String} testRunId ID of the test run to fetch
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.expand &lt;p&gt;Defaults to false. If set to true, the &#39;agents&#39; array returns the retrieve operation on the relevant testagents instead of their IDs only&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Not supported at this point(yet)&lt;/strong&gt;&lt;/p&gt;
     * @param {module:api/DefaultApi~retrieveTestRunByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TestRun}
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

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TestRun;

      return this.apiClient.callApi(
        '/testruns/{testRunId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the runRemoteTest operation.
     * @callback module:api/DefaultApi~runRemoteTestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TestRunId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * &lt;p&gt;Initialize new test run for remote (SDK) tests&lt;/p&gt;
     * @param {module:model/RemoteTestOptions} options Remote test execution options
     * @param {module:api/DefaultApi~runRemoteTestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TestRunId}
     */
    this.runRemoteTest = function(options, callback) {
      var postBody = options;

      // verify the required parameter 'options' is set
      if (options == undefined || options == null) {
        throw "Missing the required parameter 'options' when calling runRemoteTest";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TestRunId;

      return this.apiClient.callApi(
        '/tests/remote/run', 'POST',
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
     * &lt;p&gt;Execute a specific test.&lt;/p&gt;&lt;p&gt;Once the test finishes, if a webhook is provided, the webhook will be called with the given input. To the input, a field called “testRunId” will be added, with the ID of the test run result.&lt;/p&gt;&lt;p&gt;The webhook&#39;s override can contain a list of key values of fields of the test that are overridden with specific values for this test. Fields that can be overridden are: concurrentUsers, iterations, runOptions, serviceUrl&lt;/p&gt;&lt;p&gt;&lt;i&gt;Additional fields will be returned in the future in the JSON once we model them nicely.&lt;/i&gt;&lt;/p&gt;
     * @param {String} testId ID of the test to fetch
     * @param {Object} opts Optional parameters
     * @param {module:model/TestRunParameters} opts.parameters If this webhook is provided, then it will be called once the test finishes. A field called &#39;testRunId&#39; will be added, with the ID of the test run
     * @param {module:api/DefaultApi~runTestByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TestRunId}
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

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TestRunId;

      return this.apiClient.callApi(
        '/tests/{testId}/run', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRemoteTestRunStats operation.
     * @callback module:api/DefaultApi~updateRemoteTestRunStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TestRunId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * &lt;p&gt;Update remote executed (SDK) test run with getStats data, use isLastChunk &#x3D; true to finalize test run.&lt;/p&gt;
     * @param {String} testRunId ID of the test run
     * @param {module:model/GetStatsChunk} chunk getStats data
     * @param {module:api/DefaultApi~updateRemoteTestRunStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TestRunId}
     */
    this.updateRemoteTestRunStats = function(testRunId, chunk, callback) {
      var postBody = chunk;

      // verify the required parameter 'testRunId' is set
      if (testRunId == undefined || testRunId == null) {
        throw "Missing the required parameter 'testRunId' when calling updateRemoteTestRunStats";
      }

      // verify the required parameter 'chunk' is set
      if (chunk == undefined || chunk == null) {
        throw "Missing the required parameter 'chunk' when calling updateRemoteTestRunStats";
      }


      var pathParams = {
        'testRunId': testRunId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TestRunId;

      return this.apiClient.callApi(
        '/testruns/remote/{testRunId}/stats', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateStandardTestRunStats operation.
     * @callback module:api/DefaultApi~updateStandardTestRunStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BlobUploadResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * &lt;p&gt;Upload getStats data to Azure for selected test iteration (not to be used with remote test runs)&lt;/p&gt;
     * @param {String} testRunId Test run ID
     * @param {String} testIterationMachineId Machine ID for the iteration
     * @param {Integer} testIterationIndex Index of the iteration
     * @param {module:model/GetStatsChunk} chunk getStats data
     * @param {module:api/DefaultApi~updateStandardTestRunStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BlobUploadResult}
     */
    this.updateStandardTestRunStats = function(testRunId, testIterationMachineId, testIterationIndex, chunk, callback) {
      var postBody = chunk;

      // verify the required parameter 'testRunId' is set
      if (testRunId == undefined || testRunId == null) {
        throw "Missing the required parameter 'testRunId' when calling updateStandardTestRunStats";
      }

      // verify the required parameter 'testIterationMachineId' is set
      if (testIterationMachineId == undefined || testIterationMachineId == null) {
        throw "Missing the required parameter 'testIterationMachineId' when calling updateStandardTestRunStats";
      }

      // verify the required parameter 'testIterationIndex' is set
      if (testIterationIndex == undefined || testIterationIndex == null) {
        throw "Missing the required parameter 'testIterationIndex' when calling updateStandardTestRunStats";
      }

      // verify the required parameter 'chunk' is set
      if (chunk == undefined || chunk == null) {
        throw "Missing the required parameter 'chunk' when calling updateStandardTestRunStats";
      }


      var pathParams = {
        'testRunId': testRunId,
        'testIterationMachineId': testIterationMachineId,
        'testIterationIndex': testIterationIndex
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BlobUploadResult;

      return this.apiClient.callApi(
        '/testruns/{testRunId}/iterations/{testIterationMachineId}/{testIterationIndex}/stats', 'POST',
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
     * &lt;p&gt;Add or update custom metrics of a specific test run agent.&lt;/p&gt;&lt;p&gt;This appends the custom metrics selected to the current metrics already in this run. If the same name is already in the test, its value will get updated.&lt;/p&gt;&lt;p&gt;This call returns the updated list of all custom metrics for the test upon success.&lt;/p&gt;
     * @param {String} testAgentId ID of the test agent to fetch
     * @param {module:model/CustomMetrics} metrics Metrics to update
     * @param {module:api/DefaultApi~updateTestAgentMetricsByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomMetrics}
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

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
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
