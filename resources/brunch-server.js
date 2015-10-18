'use strict';

var bodyParser = require('body-parser');
var express    = require('express');
var http       = require('http');
var logger     = require('morgan');
var Path       = require('path');
var bills      = require('./mock/bills.json');

module.exports = function startServer(port, path, callback) {
  var app = express();
  var server = http.createServer(app);

  app.use(express.static(Path.join(__dirname, path)));
  app.use(logger('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/bills', function(req, res) {
    res.json(bills);
  });

  server.listen(port, callback);
};
