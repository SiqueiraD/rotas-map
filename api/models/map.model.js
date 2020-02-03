'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mapSchema = new Schema({
   title: {
      type: String
   },
   waypoints: {
      type: Object
   },
   Created_date: {
      type: Date,
      default: Date.now
   }
});
module.exports = mongoose.model('Maps', mapSchema);