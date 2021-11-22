"use strict";

import mongoose from "mongoose";
const Schema = mongoose.Schema;
const inventorySchema = new Schema({
    itemId: {type: "string", required: true, unique: true},
    itemName: {type: "string", required: true},
    quantity: {type: "number", required: true},
    meta: {
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now }
      },
});

var Inventory = mongoose.model("Inventory", inventorySchema);
Inventory.createIndexes(function(err) {
  if (err) console.log("Error: ", err);
});

/******************
 * Export schema  *
 ******************/
module.exports = Inventory;