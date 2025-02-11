const express = require("express");
const Cart = require("../models/Cart");

const router = express.Router();

// Get Cart
router.get("/:userId", async (req, res) => {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate("products.productId");
    res.json(cart);
});

// Add to Cart
router.post("/add", async (req, res) => {
    const { userId, productId, quantity } = req.body;
    let cart = await Cart.findOne({ userId });

    if (!cart) {
        cart = new Cart({ userId, products: [] });
    }

    cart.products.push({ productId, quantity });
    await cart.save();
    res.json(cart);
});

module.exports = router;
