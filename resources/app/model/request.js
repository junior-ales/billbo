'use strict';

var get = function(url, options) {
  var request = new XMLHttpRequest();
  request.open('GET', encodeURI(url));
  request.onload = function() {
    if (request.status < 400) {
      options.success(request.responseText);
    }
  };
  request.send();
};

var param = function(object) {
  var encodedString = '';
  for (var prop in object) {
    if (object.hasOwnProperty(prop)) {
      if (encodedString.length > 0) {
        encodedString += '&';
      }
      encodedString += encodeURI(prop + '=' + object[prop]);
    }
  }
  return encodedString;
}

var post = function(url, options) {
  var request = new XMLHttpRequest();
  request.open('POST', encodeURI(url), true);
  request.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.onload = function() {
    if (request.status < 400) {
      options.success();
    }
  };

  request.send(param(options.data));
};

module.exports = {
  get: get,
  post: post
};
