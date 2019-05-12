/*
============================================
; Title:  index.js
; Title:  api-Gateway
; Author: Professor Krasso
; Description: Routes the homepage 
; Modified By: Drew Hanson+
; Description: Configuring RESTful security service
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
