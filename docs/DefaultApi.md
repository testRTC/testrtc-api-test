# TestRtcApi.DefaultApi

All URIs are relative to *https://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findTestById**](DefaultApi.md#findTestById) | **GET** /tests/{testId} | 
[**retrieveTestAgentById**](DefaultApi.md#retrieveTestAgentById) | **GET** /testagents/{testAgentId} | 
[**retrieveTestRunById**](DefaultApi.md#retrieveTestRunById) | **GET** /testruns/{testRunId} | 
[**runTestById**](DefaultApi.md#runTestById) | **POST** /tests/{testId}/run | 
[**updateTestAgentMetricsById**](DefaultApi.md#updateTestAgentMetricsById) | **POST** /testagents/{testAgentId}/metrics | 


<a name="findTestById"></a>
# **findTestById**
> Test findTestById(testId)



&amp;lt;p&amp;gt;Retrieve the information of a specific test.&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;&amp;lt;i&amp;gt;Additional fields will be returned in the future in the JSON once we model them nicely.&amp;lt;/i&amp;gt;&amp;lt;/p&amp;gt;

### Example
```javascript
var TestRtcApi = require('test-rtc-api');

var apiInstance = new TestRtcApi.DefaultApi()

var testId = "testId_example"; // {String} ID of the test to fetch


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.findTestById(testId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testId** | **String**| ID of the test to fetch | 

### Return type

[**Test**](Test.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="retrieveTestAgentById"></a>
# **retrieveTestAgentById**
> TestAgent retrieveTestAgentById(testAgentId)



&amp;lt;p&amp;gt;Retrieve report of a specific test agent information.&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;Each test run result is constructed out of the number of test agents used for running the test. This API retrieves the information from one specific test agent within a test run.&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;&amp;lt;i&amp;gt;Additional fields will be returned in the future in the JSON once we model them nicely.&amp;lt;/i&amp;gt;&amp;lt;/p&amp;gt;

### Example
```javascript
var TestRtcApi = require('test-rtc-api');

var apiInstance = new TestRtcApi.DefaultApi()

var testAgentId = "testAgentId_example"; // {String} ID of the test agent to fetch


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.retrieveTestAgentById(testAgentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testAgentId** | **String**| ID of the test agent to fetch | 

### Return type

[**TestAgent**](TestAgent.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="retrieveTestRunById"></a>
# **retrieveTestRunById**
> TestRun retrieveTestRunById(testRunId, opts)



&amp;lt;p&amp;gt;Retrieve test run information.&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;&amp;lt;i&amp;gt;Additional fields will be returned in the future in the JSON once we model them nicely.&amp;lt;/i&amp;gt;&amp;lt;/p&amp;gt;

### Example
```javascript
var TestRtcApi = require('test-rtc-api');

var apiInstance = new TestRtcApi.DefaultApi()

var testRunId = "testRunId_example"; // {String} ID of the test run to fetch

var opts = { 
  'expand': true // {Boolean} <p>Defaults to false. If set to true, the 'agents' array returns the retrieve operation on the relevant testagents instead of their IDs only</p><p><strong>Not supported at this point(yet)</strong></p>
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.retrieveTestRunById(testRunId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testRunId** | **String**| ID of the test run to fetch | 
 **expand** | **Boolean**| &lt;p&gt;Defaults to false. If set to true, the &#39;agents&#39; array returns the retrieve operation on the relevant testagents instead of their IDs only&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Not supported at this point(yet)&lt;/strong&gt;&lt;/p&gt; | [optional] 

### Return type

[**TestRun**](TestRun.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="runTestById"></a>
# **runTestById**
> TestRunId runTestById(testId, opts)



&amp;lt;p&amp;gt;Execute a specific test.&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;Once the test finishes, if a webhook is provided, the webhook will be called with the given input. To the input, a field called \u201CtestRunId\u201D will be added, with the ID of the test run result.&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;The webhook&amp;#39;s override can contain a list of key values of fields of the test that are overridden with specific values for this test. Fields that can be overridden are: concurrentUsers, iterations, runOptions, serviceUrl&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;&amp;lt;i&amp;gt;Additional fields will be returned in the future in the JSON once we model them nicely.&amp;lt;/i&amp;gt;&amp;lt;/p&amp;gt;

### Example
```javascript
var TestRtcApi = require('test-rtc-api');

var apiInstance = new TestRtcApi.DefaultApi()

var testId = "testId_example"; // {String} ID of the test to fetch

var opts = { 
  'parameters': new TestRtcApi.TestRunParameters() // {TestRunParameters} If this webhook is provided, then it will be called once the test finishes. A field called 'testRunId' will be added, with the ID of the test run
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.runTestById(testId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testId** | **String**| ID of the test to fetch | 
 **parameters** | [**TestRunParameters**](TestRunParameters.md)| If this webhook is provided, then it will be called once the test finishes. A field called &#39;testRunId&#39; will be added, with the ID of the test run | [optional] 

### Return type

[**TestRunId**](TestRunId.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTestAgentMetricsById"></a>
# **updateTestAgentMetricsById**
> CustomMetrics updateTestAgentMetricsById(testAgentId, metrics)



&amp;lt;p&amp;gt;Add or update custom metrics of a specific test run agent.&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;This appends the custom metrics selected to the current metrics already in this run. If the same name is already in the test, its value will get updated.&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;This call returns the updated list of all custom metrics for the test upon success.&amp;lt;/p&amp;gt;

### Example
```javascript
var TestRtcApi = require('test-rtc-api');

var apiInstance = new TestRtcApi.DefaultApi()

var testAgentId = "testAgentId_example"; // {String} ID of the test agent to fetch

var metrics = new TestRtcApi.CustomMetrics(); // {CustomMetrics} Metrics to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateTestAgentMetricsById(testAgentId, metrics, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testAgentId** | **String**| ID of the test agent to fetch | 
 **metrics** | [**CustomMetrics**](CustomMetrics.md)| Metrics to update | 

### Return type

[**CustomMetrics**](CustomMetrics.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

