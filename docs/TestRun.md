# TestRtcApi.TestRun

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**testRunId** | **String** | The unique identity of the TestRun object. Used as the key to access a test run. | [optional] 
**testId** | **String** | The unique identity of the Test object. | [optional] 
**status** | **String** | The result status of the test. Can be &#39;success&#39;, &#39;warning&#39; or &#39;failure&#39; | [optional] 
**runType** | **String** | Can be either &#39;manual&#39; or &#39;automated&#39; | [optional] 
**concurrentUsers** | **Integer** | The number of concurrent browser agents used in this test run | [optional] 
**totalSessions** | **Integer** | The total number of WebRTC PeerConnection sessions conducted in this test run | [optional] 
**totalIncomingData** | **Integer** | (in bytes) The total number of bytes received in the test by all browsers (as reported by the browsers&#39; getstats() API call) | [optional] 
**totalOutgoingData** | **Integer** | (in bytes) The total number of bytes sent in the test by all browsers (as reported by the browsers&#39; getstats() API call) | [optional] 
**startTime** | **String** | The starting time of the test run | [optional] 
**duration** | **Integer** | (in seconds) The total duration of the test run | [optional] 
**agents** | **[String]** | The list of unique test agents used in the given test run. This can either be ID values or expanded TestAgent objects, depending on which API call was made and what parameters was passed to it. | [optional] 
**url** | **String** | URL of this test result | [optional] 


