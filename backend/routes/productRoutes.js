import express from "express";
import productSchema from "../models/productSchema.js"; 

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
    try {
        const products = await ProproductSchemaduct.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});


export default router;
