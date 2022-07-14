const mongoose = require("./connection");

const OrderModel = mongoose.model(
  "Order",
  new mongoose.Schema({
    order: [
      {
        quantity: {
          type: Number,
          required: true,
        },
        item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Menu',
          required: true,
        },
      },
    ],
    price: {
      type: Number,
      required: true,
    },
  })
);

module.exports = OrderModel;