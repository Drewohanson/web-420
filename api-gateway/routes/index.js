/*
============================================
; Title:  index.js
; Author: Drew Hanson
; Date:  4 May 2019
; Description: Routes the homepage 
;===========================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
