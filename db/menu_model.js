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
      type: String,
      required: true
    },
    image_url: {
      type: String,
      required: true
    }
  })
);

module.exports = MenuModel;