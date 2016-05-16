//var assert = require('chai').assert;
var testRTCApi = require('../src/index');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
describe('call testrtc api', function () {
  //var apikey = 'bc51597a-a11d-4ddf-8fbc-c223a305368b';
  var apikey = 'de001d2f-2d89-4bc7-8287-6a62d4852060';
  var apiUrl = 'https://api.testrtc.com/v1s1';
  var auth = {type: 'apiKey', name: 'apikey', in: 'header', apiKey: apikey};
  var api;
  before(function() {
    var apiClient = new testRTCApi.ApiClient();
    apiClient.basePath = apiUrl;
    apiClient.authentications['apikey'] = auth;
    api = new testRTCApi.DefaultApi(apiClient);
  });
  it('findTestById', function(done) {
    this.timeout(20000);
    //'567a31aa7524831000e541d9'
    var testId = '56b079c0a61eb11100898e6a';
    api.findTestById(testId, function(err, result) {
      console.log(result);
      done(err);
    });
  });
});