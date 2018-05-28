'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schemat uzytkownika
var postsSchema = new Schema({
  created: Date,
  url: {
    type: String,
    required: 'Enter a url for this post'
  },
  title: {
    type: String,
    required: 'Enter a title for this post'
  },
  description: String,
  display: String,
  display_type: String
}, {strict: false});

module.exports = mongoose.model('Posts', postsSchema);