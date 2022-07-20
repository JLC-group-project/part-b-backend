const mongoose = require("./connection");

const PageModel = mongoose.model(
  "Page",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  })
);

module.exports = PageModel;
