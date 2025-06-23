const express = require("express");
const router = express.Router();
const { addToCart, getCartItems, removeFromCart, updateQuantity} = require("../controllers/cartController"); // ✅ Import both

router.post("/add", addToCart);
router.get("/get-details/:username", getCartItems);
router.delete("/remove/:id", removeFromCart);
router.patch("/update-quantity/:itemId", updateQuantity);


module.exports = router;
