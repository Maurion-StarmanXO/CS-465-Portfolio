const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  length: { type: String, required: true },        // e.g. "4 nights / 5 days"
  start: { type: Date, required: true },           // ISO date
  resort: { type: String, required: true },        // e.g. "Gale Reef"
  perPerson: { type: Number, required: true },     // e.g. 799
  image: { type: String, required: true },         // e.g. "reef1.jpg"
  description: { type: String, required: true }
});

module.exports = mongoose.model('Trip', tripSchema);

