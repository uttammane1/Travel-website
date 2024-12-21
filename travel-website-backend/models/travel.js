const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;
