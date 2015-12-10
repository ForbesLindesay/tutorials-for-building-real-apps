'use strict';

var express = require('express');
var browserify = require('browserify-middleware');
var bodyParser = require('body-parser');

var app = express();

app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/bundle.js', browserify(__dirname + '/index.js'));

var items = [];

app.get('/items', function (req, res, next) {
  res.json(items);
});

app.put('/items/create', bodyParser.json(), function (req, res, next) {
  items.push(req.body.item);
  res.json(items);
});

app.listen(3000);
