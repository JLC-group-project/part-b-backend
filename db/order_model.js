const mongoose = require("./connection");

const OrderModel = mongoose.model(
  "Order",
  new mongoose.Schema({
    orders: [
      {
        quantity: {
          type: Number,
          required: true,
        },
        item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Menu",
          required: true,
        },
        customisation: {
          milk: String,
          ice: String,
          sugar: String,
          size: String,
        },
      },
    ],
    total_price: {
      type: Number,
      required: true,
    },
    complete: {
      type: Boolean,
      required: true,
    },
  })
);

module.exports = OrderModel;