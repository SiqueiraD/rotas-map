'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mapSchema = new Schema({
   title: {
      type: String
   },
   body: {
      type: String
   },
   author: {
      type: mongoose.Schema.User.ObjectId,
      required: true
   },
   Created_date: {
      type: Date,
      default: Date.now
   }
});
module.exports = mongoose.model('Maps', mapSchema);