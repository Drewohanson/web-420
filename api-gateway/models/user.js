/*============================================
; Title: Assignment 2.3
; Author: Professor Krasso 
; Date:  11 May 2019
; Modified By: Drew Hanson
; Description: Fields username, password, and email 
;===========================================
*/

/**
Fields username, password, and email
*/
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
 username: String,
 password: String,
 email: String
});
module.exports = mongoose.model('User', userSchema);
/**
Database queries
*/