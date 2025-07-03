const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  username: { type: String, required: true },
  productId: { type: String, required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  image_url: { type: String },
  seller_name: { type: String, required: true }, // ✅ add sellerName
});

module.exports = mongoose.model("CartItem", cartItemSchema);
