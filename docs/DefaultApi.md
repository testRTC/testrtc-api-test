# TestRtcApi.DefaultApi

All URIs are relative to *https://api.testrtc.com/v1s1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findTestById**](DefaultApi.md#findTestById) | **GET** /tests/{testId} | 
[**gerServiceSatatus**](DefaultApi.md#gerServiceSatatus) | **GET** /status-page | 
[**retrieveTestAgentById**](DefaultApi.md#retrieveTestAgentById) | **GET** /testagents/{testAgentId} | 
[**retrieveTestRunById**](DefaultApi.md#retrieveTestRunById) | **GET** /testruns/{testRunId} | 
[**runRemoteTest**](DefaultApi.md#runRemoteTest) | **POST** /tests/remote/run | 
[**runTestById**](DefaultApi.md#runTestById) | **POST** /tests/{testId}/run | 
[**updateRemoteTestRunStats**](DefaultApi.md#updateRemoteTestRunStats) | **POST** /testruns/remote/{testRunId}/stats | 
[**updateStandardTestRunStats**](DefaultApi.md#updateStandardTestRunStats) | **POST** /testruns/{testRunId}/iterations/{testIterationMachineId}/{testIterationIndex}/stats | 
[**updateTestAgentMetricsById**](DefaultApi.md#updateTestAgentMetricsById) | **POST** /testagents/{testAgentId}/metrics | 


<a name="findTestById"></a>
# **findTestById**
> Test findTestById(testId)



&lt;p&gt;Retrieve the information of a specific test.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Additional fields will be returned in the future in the JSON once we model them nicely.&lt;/i&gt;&lt;/p&gt;

### Example
```javascript
var TestRtcApi = require('test_rtc_api');
var defaultClient = TestRtcApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new TestRtcApi.DefaultApi();

var testId = "testId_example"; // String | ID of the test to fetch


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findTestById(testId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testId** | **String**| ID of the test to fetch | 

### Return type

[**Test**](Test.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerServiceSatatus"></a>
# **gerServiceSatatus**
> StatusPage gerServiceSatatus()



&lt;p&gt;Get service status.&lt;/p&gt;

### Example
```javascript
var TestRtcApi = require('test_rtc_api');

var apiInstance = new TestRtcApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gerServiceSatatus(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**StatusPage**](StatusPage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveTestAgentById"></a>
# **retrieveTestAgentById**
> TestAgent retrieveTestAgentById(testAgentId)



&lt;p&gt;Retrieve report of a specific test agent information.&lt;/p&gt;&lt;p&gt;Each test run result is constructed out of the number of test agents used for running the test. This API retrieves the information from one specific test agent within a test run.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Additional fields will be returned in the future in the JSON once we model them nicely.&lt;/i&gt;&lt;/p&gt;

### Example
```javascript
var TestRtcApi = require('test_rtc_api');
var defaultClient = TestRtcApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new TestRtcApi.DefaultApi();

var testAgentId = "testAgentId_example"; // String | ID of the test agent to fetch


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveTestAgentById(testAgentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testAgentId** | **String**| ID of the test agent to fetch | 

### Return type

[**TestAgent**](TestAgent.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveTestRunById"></a>
# **retrieveTestRunById**
> TestRun retrieveTestRunById(testRunId, opts)



&lt;p&gt;Retrieve test run information.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Additional fields will be returned in the future in the JSON once we model them nicely.&lt;/i&gt;&lt;/p&gt;

### Example
```javascript
var TestRtcApi = require('test_rtc_api');
var defaultClient = TestRtcApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new TestRtcApi.DefaultApi();

var testRunId = "testRunId_example"; // String | ID of the test run to fetch

var opts = { 
  'expand': true // Boolean | <p>Defaults to false. If set to true, the 'agents' array returns the retrieve operation on the relevant testagents instead of their IDs only</p><p><strong>Not supported at this point(yet)</strong></p>
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveTestRunById(testRunId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testRunId** | **String**| ID of the test run to fetch | 
 **expand** | **Boolean**| &lt;p&gt;Defaults to false. If set to true, the &#39;agents&#39; array returns the retrieve operation on the relevant testagents instead of their IDs only&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Not supported at this point(yet)&lt;/strong&gt;&lt;/p&gt; | [optional] 

### Return type

[**TestRun**](TestRun.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="runRemoteTest"></a>
# **runRemoteTest**
> TestRunId runRemoteTest(options)



&lt;p&gt;Initialize new test run for remote (SDK) tests&lt;/p&gt;

### Example
```javascript
var TestRtcApi = require('test_rtc_api');
var defaultClient = TestRtcApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new TestRtcApi.DefaultApi();

var options = new TestRtcApi.RemoteTestOptions(); // RemoteTestOptions | Remote test execution options


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.runRemoteTest(options, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **options** | [**RemoteTestOptions**](RemoteTestOptions.md)| Remote test execution options | 

### Return type

[**TestRunId**](TestRunId.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="runTestById"></a>
# **runTestById**
> TestRunId runTestById(testId, opts)



&lt;p&gt;Execute a specific test.&lt;/p&gt;&lt;p&gt;Once the test finishes, if a webhook is provided, the webhook will be called with the given input. To the input, a field called “testRunId” will be added, with the ID of the test run result.&lt;/p&gt;&lt;p&gt;The webhook&#39;s override can contain a list of key values of fields of the test that are overridden with specific values for this test. Fields that can be overridden are: concurrentUsers, iterations, runOptions, serviceUrl&lt;/p&gt;&lt;p&gt;&lt;i&gt;Additional fields will be returned in the future in the JSON once we model them nicely.&lt;/i&gt;&lt;/p&gt;

### Example
```javascript
var TestRtcApi = require('test_rtc_api');
var defaultClient = TestRtcApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new TestRtcApi.DefaultApi();

var testId = "testId_example"; // String | ID of the test to fetch

var opts = { 
  'parameters': new TestRtcApi.TestRunParameters() // TestRunParameters | If this webhook is provided, then it will be called once the test finishes. A field called 'testRunId' will be added, with the ID of the test run
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.runTestById(testId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testId** | **String**| ID of the test to fetch | 
 **parameters** | [**TestRunParameters**](TestRunParameters.md)| If this webhook is provided, then it will be called once the test finishes. A field called &#39;testRunId&#39; will be added, with the ID of the test run | [optional] 

### Return type

[**TestRunId**](TestRunId.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRemoteTestRunStats"></a>
# **updateRemoteTestRunStats**
> TestRunId updateRemoteTestRunStats(testRunId, chunk)



&lt;p&gt;Update remote executed (SDK) test run with getStats data, use isLastChunk &#x3D; true to finalize test run.&lt;/p&gt;

### Example
```javascript
var TestRtcApi = require('test_rtc_api');
var defaultClient = TestRtcApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new TestRtcApi.DefaultApi();

var testRunId = "testRunId_example"; // String | ID of the test run

var chunk = new TestRtcApi.GetStatsChunk(); // GetStatsChunk | getStats data


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRemoteTestRunStats(testRunId, chunk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testRunId** | **String**| ID of the test run | 
 **chunk** | [**GetStatsChunk**](GetStatsChunk.md)| getStats data | 

### Return type

[**TestRunId**](TestRunId.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateStandardTestRunStats"></a>
# **updateStandardTestRunStats**
> BlobUploadResult updateStandardTestRunStats(testRunId, testIterationMachineId, testIterationIndex, chunk)



&lt;p&gt;Upload getStats data to Azure for selected test iteration (not to be used with remote test runs)&lt;/p&gt;

### Example
```javascript
var TestRtcApi = require('test_rtc_api');
var defaultClient = TestRtcApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new TestRtcApi.DefaultApi();

var testRunId = "testRunId_example"; // String | Test run ID

var testIterationMachineId = "testIterationMachineId_example"; // String | Machine ID for the iteration

var testIterationIndex = 56; // Integer | Index of the iteration

var chunk = new TestRtcApi.GetStatsChunk(); // GetStatsChunk | getStats data


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateStandardTestRunStats(testRunId, testIterationMachineId, testIterationIndex, chunk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testRunId** | **String**| Test run ID | 
 **testIterationMachineId** | **String**| Machine ID for the iteration | 
 **testIterationIndex** | **Integer**| Index of the iteration | 
 **chunk** | [**GetStatsChunk**](GetStatsChunk.md)| getStats data | 

### Return type

[**BlobUploadResult**](BlobUploadResult.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTestAgentMetricsById"></a>
# **updateTestAgentMetricsById**
> CustomMetrics updateTestAgentMetricsById(testAgentId, metrics)



&lt;p&gt;Add or update custom metrics of a specific test run agent.&lt;/p&gt;&lt;p&gt;This appends the custom metrics selected to the current metrics already in this run. If the same name is already in the test, its value will get updated.&lt;/p&gt;&lt;p&gt;This call returns the updated list of all custom metrics for the test upon success.&lt;/p&gt;

### Example
```javascript
var TestRtcApi = require('test_rtc_api');
var defaultClient = TestRtcApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new TestRtcApi.DefaultApi();

var testAgentId = "testAgentId_example"; // String | ID of the test agent to fetch

var metrics = new TestRtcApi.CustomMetrics(); // CustomMetrics | Metrics to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTestAgentMetricsById(testAgentId, metrics, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testAgentId** | **String**| ID of the test agent to fetch | 
 **metrics** | [**CustomMetrics**](CustomMetrics.md)| Metrics to update | 

### Return type

[**CustomMetrics**](CustomMetrics.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

