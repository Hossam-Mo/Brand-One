const mongoose = require("mongoose");

const product = mongoose.Schema({
  price: String,
  name: String,
  rating: Number,
  saction: String,
  size: [String],
  colors: [{ color: String, imgs: [{ img: String }] }],
});

module.exports = mongoose.model("product", product);
