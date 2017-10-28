/* global require */
/* global module */
/* global __dirname */
var express = require('express');
//This is a comment
//Hahahahahaha
module.exports = function(app) {
  app.use(express.static(__dirname + '/prod'));
};
