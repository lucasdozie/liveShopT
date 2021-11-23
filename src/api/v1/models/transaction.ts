"use strict"

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User"},
  show: { type: Schema.Types.ObjectId, ref: "Show"},
  inventory: { type: Schema.Types.ObjectId, ref: "Inventory"},
  description: { type: String },
  product: { 
      itemId: String,
      itemName: String,
      quantity: String,
  }, //can be Items or Inventory e.g {item_id, itemName, quantity}
  amount: {type: String, default: "300"},//additional meta
  deleted: { type: Boolean, default: false },
  meta: {
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now } 
},
});
//showSchema.index({name: "text"},{ collation: { locale: 'en', strength: 1 } }); // schema level

var Transaction = mongoose.model("Transaction", transactionSchema);
Transaction.createIndexes(function(err) {
  if (err) console.log("Error: ", err);
});

/******************
 * Export schema  *
 ******************/
module.exports = Transaction;