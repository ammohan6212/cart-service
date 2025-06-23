const express = require("express");
const router = express.Router();
const { addToCart, getCartItems } = require("../controllers/cartController"); // ✅ Import both

router.post("/add", addToCart);
router.get("/:username", getCartItems); // ✅ This was failing due to missing import

module.exports = router;
