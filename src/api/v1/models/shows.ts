"use strict"

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const showSchema = new Schema({
  admin: { type: Schema.Types.ObjectId, ref: "Admin"},
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  adminId: { type: String},
  description: { type: String, required: true },
  products: {type: Array, required: true}, //can be Items or Inventory e.g {item_id, itemName, quantity}// item on display for this show
  location: {
    latitude: { type: Number },
    longitude: { type: Number }
  },

  address: {
    street: { type: String },
    state: { type: String },
    country: { type: String }
  },


  user: [{ type: Schema.Types.ObjectId, ref: "User"}], //Optional for audience that interacted with this show

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