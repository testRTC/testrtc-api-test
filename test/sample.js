var assert = require('chai').assert;
var expect    = require("chai").expect;
var testRTCApi = require('../src/index');
var should = require('should'); 
var assert = require('assert');
var request = require('supertest'); 

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

describe('call testrtc api', function () {
  var apikey = 'a1596921-3733-4be8-9248-06dc82ca2821';
  var apiUrl = 'https://api.testrtc.com/v1s1';
  var testId1 = '5735ae56bcf6231100d8c36e';
  var testRunId1='5714b3600d7bbb140063cdd8';
  var testAgentId1='5714bc430d7bbb140063ce09';
  
  /*
	 * Test DefaultApi.findTestById(testId). With correct testId and APIkey.
	 * Assertion is for test name, run options , test id, and service url.
	 */
  it('findTestById with correct details.', function(done) {
    this.timeout(20000);
    request(apiUrl)
      .get("/tests/"+testId1)
      .set({apikey : apikey})
      .expect(200) //Status code
		  .end(function(err,res) {
			 if (err) {
          
				  throw err;
			  }
	      res.body.testId.should.equal(testId1);
	      res.body.name.should.equal('Test script for Dialogic (1)');     
        res.body.concurrentUsers.should.equal(2);   
        res.body.iterations.should.equal(1);   
        res.body.serviceUrl.should.equal('https://devconf.dialogic.com:8443/DialogicConference/conference/meeting');          
	      res.body.runOptions.should.equal('#vnc #session:10'); 
        res.body.script.should.not.equal(null);
			  done();
      });
   });
  
  /*
	 * Test DefaultApi.findTestById(testId). With wrong testId.
	 * Assertion for error message.
	 */
  it('findTestById With Wrong Id', function(done) {
    this.timeout(20000);
    request(apiUrl)
      .get("/tests/qq")
      .set({apikey : apikey})
      .expect(400) //Status code
		  .end(function(err,res) {
			  if (err) {
          throw err;
			  }
           res.body.message.should.equal("Invalid testId");
           res.body.code.should.equal(100);
          done();
      });
  });
  
  /*
	 * Test DefaultApi.findTestById(testId). With blank testId.
	 * Assertion for error message.
	 */
  it('findTestById With Blank Id', function(done) {
    this.timeout(20000);
    request(apiUrl)
      .get("/tests/")
      .set({apikey : apikey})
      .expect(400) //Status code
		  .end(function(err,res) {
          done();
      });
  });
  
  /*
	 * Test DefaultApi.findTestById(testId). With wrong apikey.	
	 * Assertion for error message.
	 */
   it('findTestById With Wrong APIKey', function(done) {
    this.timeout(20000);
    request(apiUrl)
      .get("/tests/"+testId1)
      .set({apikey : '1234567'})
      .expect(403) //Status code
		  .end(function(err,res) {
			  if (err) {
          throw err;
			  }
           res.body.message.should.equal("Invalid authentication credentials");
          done();
      });
  });
  
  /*
	 * Test DefaultApi.findTestById(testId). With blank apikey.
	 * Assertion for error message.
	 */
    it('findTestById With blank APIKey', function(done) {
      this.timeout(20000);
      request(apiUrl)
        .get("/tests/"+testId1)
        .set({apikey : ''})
        .expect(403) //Status code
		    .end(function(err,res) {
			  if (err) {
          throw err;
			  }
        res.body.message.should.equal("Invalid authentication credentials");
        done();
      });
  });
  
  
  /*
	 * Test DefaultApi.runTestById(String testId, TestRunParameters parameters). With blank apikey.
	 * Assertion for test run id should not be null.
	 */
  it('runTestById with correct details.', function(done) {
    this.timeout(20000);
    request(apiUrl)
      .post("/tests/"+testId1+"/run")
      .set({apikey : apikey})
      .set('Content-Type',  'application/json')
      .send({
        "Webhook": {
          "url": "https://devconf.dialogic.com:8443/DialogicConference/conference/meeting",
          "input": {}
        },
        "ExecutionParameters": {
          "concurrentUsers": 4
        }
      })
      .expect(200) //Status code
		  .end(function(err,res) {
			  if (err) {
				  throw err;
			  }
	      res.body.testRunId.should.not.null;
        request(apiUrl)
      .get("/testruns/"+res.body.testRunId)
      .set({apikey : apikey})
      .expect(200) //Status code
		  .end(function(err,res) {
			  if (err) {
				  throw err;
			  } 
        res.body.concurrentUsers.should.equal(4);   
			   done();
      });
      });
   });

  it('runTestById with correct details + override machine profiles', function(done) {
    this.timeout(20000);
    request(apiUrl)
      .post("/tests/"+testId1+"/run")
      .set({apikey : apikey})
      .set('Content-Type',  'application/json')
      .send({
        "webhook": {
          "url": "https://httpbin.org/get",
          "input": {}
        },
        "executionParameters": {
          "concurrentUsers": 2
        },
        "machineProfiles": [
          {
            "browser": "Chrome Stable",
            "location": "East-US",
            "networkProfile": "",
            "firewallProfile": "",
            "media": "birds.webm"
          }
        ]
      })
      .expect(200) //Status code
      .end(function(err,res) {
        if (err) {
          throw err;
        }
        res.body.testRunId.should.not.null;
        request(apiUrl)
      .get("/testruns/"+res.body.testRunId)
      .set({apikey : apikey})
      .expect(200) //Status code
      .end(function(err,res) {
        if (err) {
          throw err;
        } 

        res.body.concurrentUsers.should.equal(2);
        res.body.status.should.equal('started');
        done();
      });
      });
   });
   
   /*
	 * Test DefaultApi.runTestById(String testId, TestRunParameters parameters). With wrong test id.
	 * Assertion for error message.
	 */
    it('runTestById with wrong details.', function(done) {
    this.timeout(20000);
    request(apiUrl)
      .post("/tests/"+testId1+"abcd"+"/run")
      .set({apikey : apikey})
      .set('Content-Type',  'application/json')
      .send({
        "Webhook": {
          "url": "https://devconf.dialogic.com:8443/DialogicConference/conference/meeting",
          "input": {}
        },
        "ExecutionParameters": {
          "concurrentUsers": 4
        }
      })
      .expect(400) //Status code
		  .end(function(err,res) {
			  if (err) {
				  throw err;
			  }
	      res.body.message.should.equal("Invalid testId");
			   done();
      });
   });
  
  /*
	 * Test DefaultApi.retrieveTestRunById(String testRunId, Boolean expand). With correct details.
	 */
  it('testruns with correct details.', function(done) {
    this.timeout(20000);
    request(apiUrl)
      .get("/testruns/"+testRunId1)
      .set({apikey : apikey})
      .expect(200) //Status code
		  .end(function(err,res) {
			  if (err) {
				  throw err;
			  }
        res.body.concurrentUsers.should.equal(2);   
        res.body.status.should.equal("warnings");   
			  done();
      });
		});
   
   /*
	 * Test DefaultApi.retrieveTestRunById(String testRunId, Boolean expand). With wrong details.
	 */
  it('testruns with wrong details.', function(done) {
    this.timeout(20000);
    request(apiUrl)
      .get("/testruns/123457"+testRunId1)
      .set({apikey : apikey})
      .expect(400) //Status code
		  .end(function(err,res) {
			  if (err) {
				  throw err;
			  }
        res.body.message.should.equal("Invalid testRunId");
			  done();
      });
	 });
   
   /*
	 * Test DefaultApi.retrieveTestAgentById(String agentId). With correct details.
	 */
    it('getTestAgentById with correct details.', function(done) {
      this.timeout(20000);
      request(apiUrl)
        .get("/testagents/"+testAgentId1)
        .set({apikey : apikey})
        .expect(200) //Status code
		    .end(function(err,res) {
			    if (err) {
		  		  throw err;
		  	  }
          res.body.location.should.equal("West US");   
          res.body.status.should.equal("warnings");  
          res.body.machine.should.equal("kaput-coat-1");   
          res.body.os.should.equal("LINUX");
          res.body.browser.name.should.equal("chrome");   
          res.body.startTime.should.not.null;
          res.body.testAgentId.should.not.null;
          res.body.testId.should.not.null;
          res.body.testRunId.should.not.null;
          res.body.customMetrics.should.not.null;
          done();
      });	
   });
   
   /*
	 * Test DefaultApi.retrieveTestAgentById(String agentId). With wrong details.
	 */
   it('getTestAgentById with wrong details.', function(done) {
      this.timeout(20000);
      request(apiUrl)
        .get("/testagents/abcd"+testAgentId1)
        .set({apikey : apikey})
        .expect(400) //Status code
		    .end(function(err,res) {
			    if (err) {
				     throw err;
			    }
          res.body.message.should.equal("Invalid testAgentId");
          done();
      });
   });
   
   /*
	 * Test DefaultApi.updateTestAgentMetricsById(String testAgentId, CustomMetrics metrics). With correct details.
	 */
    it('updateTestAgentMetricsById with correct details.', function(done) {
      this.timeout(20000);
      request(apiUrl)
        .post("/testagents/"+testAgentId1+"/metrics")
        .set({apikey : apikey})
        .set('Content-Type',  'application/json')
        .send({
          "name": "Custom Metrics through API",
          "value": "123456"
        })
        .expect(200) //Status code
		    .end(function(err,res) {
			    if (err) {
				    throw err;
			    }
	        res.body.name.should.equal("Custom Metrics through API");  
          res.body.value.should.equal("123456");   
			    done();
      });
   });
   
   /*
	 * Test DefaultApi.updateTestAgentMetricsById(String testAgentId, CustomMetrics metrics). With wrong details.
	 */
    it('updateTestAgentMetricsById with wrong details.', function(done) {
    this.timeout(20000);
    request(apiUrl)
      .post("/testagents/sss"+testAgentId1+"/metrics")
      .set({apikey : apikey})
      .set('Content-Type',  'application/json')
      .send({
          "name": "Custom Metrics through API",
          "value": "123456"
      })
      .expect(400) //Status code
		  .end(function(err,res) {
			  if (err) {
				  throw err;
			  }
	      res.body.message.should.equal("Invalid testAgentId");
			  done();
      });
   });
});