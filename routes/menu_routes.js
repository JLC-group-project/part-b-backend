const express = require("express");
const router = express.Router();
const MenuModel = require("../db/menu_model");

router.get("/", async (req, res) => {
  const items = await MenuModel.find()
  res.send(items)
})

router.get("/:id", async (req, res) => {
  const item = await MenuModel.findById(req.params.id);
  res.send(item);
});

router.post("/", async (req, res) => {
  const item = {
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
  };
  const newItem = await MenuModel.create(item);
  res.status(201).send(newItem);
});

router.put("/:id", async (req, res) => {
  res.send(
    await MenuModel.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    })
  );
});

router.delete("/:id", async (req, res) => {
  MenuModel.findByIdAndDelete(req.params.id, () => res.sendStatus(204));
});

module.exports = router