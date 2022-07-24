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
          type: {
            _id: String,
            category: String,
            name: String,
            price: String,
            image_url: String,
          },
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