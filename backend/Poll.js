const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
  text: String,
  votes: { type: Number, default: 0 },
  id: Number,
});

const pollSchema = new mongoose.Schema({
  pollTitle: String,
  datePosted: { type: Date, default: Date.now },
  options: [optionSchema],
});

module.exports = mongoose.model("Poll", pollSchema);