const express = require("express");
const router = express.Router();
const PageModel = require("../db/page_model");

router.get("/", async (req, res) => {
  const items = await PageModel.find();
  res.send(items);
});

router.get("/:id", async (req, res) => {
  const item = await PageModel.findById(req.params.id);
  res.send(item);
});

router.post("/", async (req, res) => {
  const newItem = await PageModel.create(req.body);
  res.status(201).send(newItem);
});

router.put("/:id", async (req, res) => {
  res.send(
    await PageModel.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    })
  );
});

router.delete("/:id", async (req, res) => {
  PageModel.findByIdAndDelete(req.params.id, () => res.sendStatus(204));
});

module.exports = router;
