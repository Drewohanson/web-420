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

const user = module.exports = mongoose.model('User', userSchema);
/**
Database queries
*/
 // user.save is used to add a new user in our database
 module.exports.add = (user, callback) => {
    user.save(callback);
};

// get by id
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};