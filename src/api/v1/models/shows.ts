"use strict"

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const showSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User"},
  name: {
    type: String,
    minlength: 3,
    maxlength: 50
  },
  description: { type: String },

  location: {
    latitude: { type: Number },
    longitude: { type: Number }
  },

  address: {
    street: { type: String },
    state: { type: String },
    country: { type: String }
  },

  suspended: { type: Boolean, default: false },

  deleted: { type: Boolean, default: false },
  meta: {
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now } 
},
});
//showSchema.index({name: "text"},{ collation: { locale: 'en', strength: 1 } }); // schema level

var Show = mongoose.model("Show", showSchema);
Show.createIndexes(function(err) {
  if (err) console.log("Error: ", err);
});

/******************
 * Export schema  *
 ******************/
module.exports = Show;