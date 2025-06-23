const express = require("express");
const router = express.Router();
const { addToCart, getCartItems, removeFromCart} = require("../controllers/cartController"); // ✅ Import both

router.post("/add", addToCart);
router.get("/get-details/:username", getCartItems);
router.delete("/remove/:id", removeFromCart);


module.exports = router;
