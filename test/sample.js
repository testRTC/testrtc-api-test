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
  var auth = {type: 'apiKey', name: 'apikey', in: 'header', apiKey: apikey};
  var api;
  var testId1 = '5735ae56bcf6231100d8c36e';
  
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
  
  it('testruns with correct details.', function(done) {
    this.timeout(20000);
   
          request(apiUrl)
      .get("/testruns/5714b3600d7bbb140063cdd8")
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
   });