const CartItem = require("../models/CartItem");

exports.addToCart = async (req, res) => {
  try {
    const { username, productId, name, quantity, price, image_url } = req.body;

    if (!username || !productId || !name || !quantity || !price) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const cartItem = new CartItem({
      username, productId, name, quantity, price, image_url,
    });

    await cartItem.save();
    res.status(200).json({ message: "✅ Item added to cart successfully" });
  } catch (error) {
    console.error("❌ Add to Cart Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
