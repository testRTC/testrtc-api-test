# TestRtcApi.TestAgent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**testAgentId** | **String** | The unique identifier of a test agent used in a test run. This value is unique across the testRTC service | [optional] 
**testRunId** | **String** | The unique identifier of the test run this test agent was used in | [optional] 
**testId** | **String** | The unique identifier of the test that was executed by this agent | [optional] 
**status** | **String** | The result status of the test. Can be &#39;success&#39;, &#39;warning&#39; or &#39;failure&#39; | [optional] 
**machine** | **String** | The type of the machine used by this test agent | [optional] 
**os** | **String** | The operating system used by this test agent | [optional] 
**browser** | [**TestAgentBrowser**](TestAgentBrowser.md) |  | [optional] 
**location** | **String** | The data center this test agent was running from | [optional] 
**networkProfile** | **String** | The network profile used by this test agent | [optional] 
**firewallProfile** | **String** | The firewall profile used by this test agent | [optional] 
**mediaFile** | **String** | The media file used by this test agent | [optional] 
**agentIdx** | **Integer** | The index of this agent within the test run. Starts from 1 | [optional] 
**sessionIdx** | **Integer** | The index of this agent&#39;s session within the test run. Starts from 1 | [optional] 
**inSessionIdx** | **Integer** | The index of this agent within the session. Starts from 1 | [optional] 
**startTime** | **String** | The starting time of the test run | [optional] 
**duration** | **Integer** | (in seconds) The total duration of the test run | [optional] 
**customMetrics** | [**[CustomMetrics]**](CustomMetrics.md) | An array of custom metrics added by the customer to this agent&#39;s test results | [optional] 
**channels** | [**[Channels]**](Channels.md) | Channels created in this test run | [optional] 


