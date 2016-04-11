# test-rtc-api

TestRtcApi - JavaScript client for test-rtc-api
testRTC's API for WebRTC service monitoring and testing automation.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build date: 2016-04-11T06:57:47.323Z
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install test-rtc-api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/test-rtc-api
then install it via:

```shell
npm install YOUR_USERNAME/test-rtc-api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var TestRtcApi = require('test-rtc-api');

var api = new TestRtcApi.DefaultApi()

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

## Documentation for API Endpoints

All URIs are relative to *https://localhost:8080/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TestRtcApi.DefaultApi* | [**findTestById**](docs/DefaultApi.md#findTestById) | **GET** /tests/{testId} | 
*TestRtcApi.DefaultApi* | [**retrieveTestAgentById**](docs/DefaultApi.md#retrieveTestAgentById) | **GET** /testagents/{testAgentId} | 
*TestRtcApi.DefaultApi* | [**retrieveTestRunById**](docs/DefaultApi.md#retrieveTestRunById) | **GET** /testruns/{testRunId} | 
*TestRtcApi.DefaultApi* | [**runTestById**](docs/DefaultApi.md#runTestById) | **POST** /tests/{testId}/run | 
*TestRtcApi.DefaultApi* | [**updateTestAgentMetricsById**](docs/DefaultApi.md#updateTestAgentMetricsById) | **POST** /testagents/{testAgentId}/metrics | 


## Documentation for Models

 - [TestRtcApi.Channels](docs/Channels.md)
 - [TestRtcApi.CustomMetrics](docs/CustomMetrics.md)
 - [TestRtcApi.Error](docs/Error.md)
 - [TestRtcApi.Test](docs/Test.md)
 - [TestRtcApi.TestAgent](docs/TestAgent.md)
 - [TestRtcApi.TestAgentBrowser](docs/TestAgentBrowser.md)
 - [TestRtcApi.TestRun](docs/TestRun.md)
 - [TestRtcApi.TestRunId](docs/TestRunId.md)
 - [TestRtcApi.TestRunParameters](docs/TestRunParameters.md)
 - [TestRtcApi.TestRunParametersExecutionParameters](docs/TestRunParametersExecutionParameters.md)
 - [TestRtcApi.TestRunParametersWebhook](docs/TestRunParametersWebhook.md)


## Documentation for Authorization

 All endpoints do not require authorization.

