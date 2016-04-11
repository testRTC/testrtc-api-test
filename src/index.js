(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/Channels', './model/CustomMetrics', './model/Error', './model/Test', './model/TestAgent', './model/TestAgentBrowser', './model/TestRun', './model/TestRunId', './model/TestRunParameters', './model/TestRunParametersExecutionParameters', './model/TestRunParametersWebhook', './api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Channels'), require('./model/CustomMetrics'), require('./model/Error'), require('./model/Test'), require('./model/TestAgent'), require('./model/TestAgentBrowser'), require('./model/TestRun'), require('./model/TestRunId'), require('./model/TestRunParameters'), require('./model/TestRunParametersExecutionParameters'), require('./model/TestRunParametersWebhook'), require('./api/DefaultApi'));
  }
}(function(ApiClient, Channels, CustomMetrics, Error, Test, TestAgent, TestAgentBrowser, TestRun, TestRunId, TestRunParameters, TestRunParametersExecutionParameters, TestRunParametersWebhook, DefaultApi) {
  'use strict';

  /**
   * testRTC&#39;s API for WebRTC service monitoring and testing automation..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var TestRtcApi = require('./index'); // See note below*.
   * var xxxSvc = new TestRtcApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new TestRtcApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new TestRtcApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new TestRtcApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Channels model constructor.
     * @property {module:model/Channels}
     */
    Channels: Channels,
    /**
     * The CustomMetrics model constructor.
     * @property {module:model/CustomMetrics}
     */
    CustomMetrics: CustomMetrics,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The Test model constructor.
     * @property {module:model/Test}
     */
    Test: Test,
    /**
     * The TestAgent model constructor.
     * @property {module:model/TestAgent}
     */
    TestAgent: TestAgent,
    /**
     * The TestAgentBrowser model constructor.
     * @property {module:model/TestAgentBrowser}
     */
    TestAgentBrowser: TestAgentBrowser,
    /**
     * The TestRun model constructor.
     * @property {module:model/TestRun}
     */
    TestRun: TestRun,
    /**
     * The TestRunId model constructor.
     * @property {module:model/TestRunId}
     */
    TestRunId: TestRunId,
    /**
     * The TestRunParameters model constructor.
     * @property {module:model/TestRunParameters}
     */
    TestRunParameters: TestRunParameters,
    /**
     * The TestRunParametersExecutionParameters model constructor.
     * @property {module:model/TestRunParametersExecutionParameters}
     */
    TestRunParametersExecutionParameters: TestRunParametersExecutionParameters,
    /**
     * The TestRunParametersWebhook model constructor.
     * @property {module:model/TestRunParametersWebhook}
     */
    TestRunParametersWebhook: TestRunParametersWebhook,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));
