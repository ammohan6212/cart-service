const express = require("express");
const router = express.Router();
const { addToCart, getCartItems, removeFromCart, updateQuantity,removeCartItemsByImageUrl,checkHealth} = require("../controllers/cartController"); // ✅ Import both

router.post("/add", addToCart);
router.get("/get-details/:username", getCartItems);
router.delete("/remove/:id", removeFromCart);
router.patch("/update-quantity/:itemId", updateQuantity);
router.delete('/delete-by-image', removeCartItemsByImageUrl);
router.get('/health',checkHealth);

module.exports = router;
