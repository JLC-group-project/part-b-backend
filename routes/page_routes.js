const express = require("express");
const router = express.Router();
const PageModel = require("../db/page_model");

// API Routes for Home and About Us page

// Get all page objects from MongoDB Atlas
router.get("/", async (req, res) => {
  const items = await PageModel.find();
  res.send(items);
});

// Get a specific page object from an id in MongoDB Atlas
router.get("/:id", async (req, res) => {
  const item = await PageModel.findById(req.params.id);
  res.send(item);
});

// Add a page object into MongoDB Atlas
router.post("/", async (req, res) => {
  const newItem = await PageModel.create(req.body);
  res.status(201).send(newItem);
});

// Update a specific page object from an id in MongoDB Atlas
router.put("/:id", async (req, res) => {
  res.send(
    await PageModel.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    })
  );
});

// Delete a specific page object from an id in MongoDB Atlas
router.delete("/:id", async (req, res) => {
  PageModel.findByIdAndDelete(req.params.id, () => res.sendStatus(204));
});

module.exports = router;
