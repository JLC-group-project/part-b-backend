const express = require("express");
const router = express.Router();
const MenuModel = require("../db/menu_model");

// API Routes for Menu page

// Get all menu objects from MongoDB Atlas
router.get("/", async (req, res) => {
  const items = await MenuModel.find()
  res.send(items)
})

// Get a specific menu object from an id in MongoDB Atlas
router.get("/:id", async (req, res) => {
  const item = await MenuModel.findById(req.params.id);
  res.send(item);
});

// Add a menu object into MongoDB Atlas
router.post("/", async (req, res) => {
  const newItem = await MenuModel.create(req.body);
  res.status(201).send(newItem);
});

// Update a specific menu object from an id in MongoDB Atlas
// router.put("/:id", async (req, res) => {
//   res.send(
//     await MenuModel.findByIdAndUpdate(req.params.id, req.body, {
//       returnDocument: "after",
//     })
//   );
// });

// Update a specific menu object from an item name in MongoDB Atlas
router.put("/:name", async (req, res) => {
  res.send(
    await MenuModel.findOneAndUpdate({ name: req.params.name }, req.body, {
      returnDocument: "after",
    })
  );
});

// Delete a specific menu object from an id in MongoDB Atlas
router.delete("/:id", async (req, res) => {
  MenuModel.findByIdAndDelete(req.params.id, () => res.sendStatus(204));
});

module.exports = router