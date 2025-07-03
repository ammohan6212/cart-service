const express = require("express");
const router = express.Router();
const { addToCart, getCartItems, removeFromCart, updateQuantity,removeCartItemsByImageUrl} = require("../controllers/cartController"); // ✅ Import both

router.post("/add", addToCart);
router.get("/get-details/:username", getCartItems);
router.delete("/remove/:id", removeFromCart);
router.patch("/update-quantity/:itemId", updateQuantity);
router.delete('/delete-by-image', removeCartItemsByImageUrl);



module.exports = router;
