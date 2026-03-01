const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  length: String,
  start: Date,
  resort: String,
  perPerson: Number,
  image: String,
  description: String,
});

// IMPORTANT: model name is "trips" to match mongoose.model("trips") in your controller
module.exports = mongoose.model('Trip', tripSchema, 'trips');
