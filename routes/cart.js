
const express = require("express");
const { createCart } = require("../controllers/cart.controller");



router = express.Router();

// add items to the user's cart
router.post("/addItem", createCart);

module.exports = router;