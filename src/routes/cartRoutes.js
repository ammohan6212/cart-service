const express = require("express");
const router = express.Router();
const { addToCart } = require("../controllers/cartController");

router.post("/add", addToCart);
router.get("/:username", getCartItems);




module.exports = router;
