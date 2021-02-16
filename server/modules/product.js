const mongoose = require("mongoose");

const product = mongoose.Schema({
  price: String,
  name: String,
  rating: Number,
  size: [String],
  colors: [{ color: String, imgs: [{ img: String }] }],
});

module.exports = mongoose.model("product", product);
