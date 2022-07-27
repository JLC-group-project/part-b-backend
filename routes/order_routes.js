const express = require("express");
const router = express.Router();
const OrderModel = require("../db/order_model");

// API Routes for Orders and Orders History page

// Get all order objects from MongoDB Atlas
router.get("/", async (req, res) => {
  const orders = await OrderModel.find();
  res.send(orders);
})

// Get a specific order object from an id in MongoDB Atlas
router.get("/:id", async (req, res) => {
  let order = await OrderModel.findById(req.params.id);
  res.send(order);
});

// Add an order object into MongoDB Atlas
router.post("/", async (req, res) => {
  const newOrder = await OrderModel.create(req.body)
  res.status(201).send(newOrder)
})

// Update a specific order object from an id in MongoDB Atlas
router.put("/:id", async (req, res) => {
  res.send(
    await OrderModel.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    })
  );
});

// Delete a specific page object from an id in MongoDB Atlas
router.delete("/:id", async (req, res) => {
  OrderModel.findByIdAndDelete(req.params.id, () => res.sendStatus(204));
});

module.exports = router;