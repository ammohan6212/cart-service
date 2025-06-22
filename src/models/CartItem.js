const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
  username: { type: String, required: true },
  productId: { type: String, required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  image_url: { type: String },
  addedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("CartItem", CartItemSchema);
