/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:  4 May 2019
; Modified By: Drew Hanson
; Description: Runs the application
;===========================================
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird')

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

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
mongoose.connect('mongodb+srv://drewohanson12:Ezra0831!@buwebdev-cluster-1-o4yt9.mongodb.net/test?retryWrites=true', {
  promiseLibrary: require('bluebird')
  }).then ( () => console.log('connection successful'))
  .catch( (err) => console.error(err));

module.exports = app;
