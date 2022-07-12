const mongoose = require("./connection");

const MenuModel = mongoose.model(
  "Menu",
  new mongoose.Schema({
    category: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true
    }
  })
);

module.exports = MenuModel;