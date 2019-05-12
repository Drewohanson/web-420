/*============================================
; Title: Assignment 2.3
; Author: Professor Krasso 
; Date: 11 May 2019
; Modified By: Drew Hanson
; Description: API GATEWAY
;===========================================
*/

var User = require('../models/user');
// Register a new user on POST
exports.user_register = function(req, res) {
 res.send('NOT IMPLEMENTED: User registration POST');
};
// Verify token on GET
exports.user_token = function(req, res) {
 res.send('NOT IMPLEMENTED: User token lookup GET');
};