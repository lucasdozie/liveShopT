"use strict";

import mongoose from "mongoose";

const Schema = mongoose.Schema;

//Creator model
const adminSchema = new Schema({
  first_name: {
    type: String,
    minlength: 3,
    maxlength: 50
  },
  last_name: {
    type: String,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
    trim: true
  },
  phone_number: {
    type: String
  },

  password_hash: {
    type: String
  },

  salt: {
    type: String
  },

  verifyToken: { type: String },

  verified: {type: Boolean, default: false},

  address: {
    street: { type: String },
    state: { type: String },
    country: { type: String }
  },

  resetPasswordToken: {
    type: String
  },

  resetPasswordExpires: { type: Number },

  suspended: { type: Boolean, default: false },

  deleted: { type: Boolean, default: false },
  meta: {
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  },
});

var Admin = mongoose.model("Admin", adminSchema);
Admin.createIndexes(function(err) {
  if (err) console.log("Error: ", err);
});

/******************
 * Export schema  *
 ******************/
module.exports = Admin;