var assert = require('chai').assert;
var testRTCApi = require('../src/index');


describe('call testrtc api', function () {
  var apikey = 'bc51597a-a11d-4ddf-8fbc-c223a305368b';
  var apiUrl = 'https://api.testrtc.com/v1';
  var auth = {type: 'apiKey', name: 'apikey', in: 'header', apiKey: apikey};
  var api;

  before(function() {
    var apiClient = new testRTCApi.ApiClient();
    apiClient.basePath = apiUrl;
    apiClient.authentications['apikey'] = auth;
    api = new testRTCApi.DefaultApi(apiClient);
  });

  it('findTestById', function(done) {
    api.findTestById('567a31aa7524831000e541d9', function(err, result) {
      console.log(result);
      done(err);
    });
  });
});
