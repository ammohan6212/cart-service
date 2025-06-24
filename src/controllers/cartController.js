exports.addToCart = async (req, res) => {
  try {
    const { username, productId, name, quantity, price, image_url, seller_name } = req.body;

    if (!username || !productId || !name || !quantity || !price || !seller_name) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const cartItem = new CartItem({
      username,
      productId,
      name,
      quantity,
      price,
      image_url,
      seller_name, // ✅ add sellerName field
    });

    await cartItem.save();
    res.status(200).json({ message: "✅ Item added to cart successfully" });
  } catch (error) {
    console.error("❌ Add to Cart Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.getCartItems = async (req, res) => {
  try {
    const { username } = req.params;
    const items = await CartItem.find({ username }); // ✅ fixed model name
    res.json({ cartItems: items });
  } catch (error) {
    console.error("❌ Fetch Cart Items Error:", error);
    res.status(500).json({ message: "Failed to fetch cart items" });
  }
};


exports.removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    await CartItem.findByIdAndDelete(id);
    res.status(200).json({ message: "✅ Item removed from cart" });
  } catch (err) {
    console.error("❌ Remove from cart failed:", err);
    res.status(500).json({ error: "Failed to remove item from cart" });
  }
};


exports.updateQuantity = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity < 1) {
      return res.status(400).json({ error: "⚠️ Quantity must be at least 1." });
    }

    const item = await CartItem.findById(itemId);

    if (!item) {
      return res.status(404).json({ error: "❌ Cart item not found." });
    }

    item.quantity = quantity;
    await item.save();

    res.status(200).json({ message: "✅ Quantity updated", item });
  } catch (err) {
    console.error("❌ Error updating quantity:", err);
    res.status(500).json({ error: "Failed to update quantity" });
  }
};






