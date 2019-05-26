/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:  5 May 2019
; Modified By: Drew Hanson
; Description: Runs the application
;===========================================
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


var index = require('./routes/index');
var apiCatalog = require('./routes/api-catalog');

var app = express();
  
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api', apiCatalog);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// database connection
mongoose.connect('mongodb+srv://drewohanson12:Ezra0831!@buwebdev-cluster-1-o4yt9.mongodb.net/test', {
  promiseLibrary: require('bluebird')
  }).then ( () => console.log('connection successful'))
  .catch( (err) => console.error(err));

module.exports = app;
