/*
============================================
; Title:  config.js
; Author: Professor Krasso
; Date:  4 May 2019
; Modified By: Drew Hanson
; Description: Configures the server
;===========================================
*/

var config = {};
config.web = {};
config.web.port = process.env.PORT || "3000";
module.exports = config;