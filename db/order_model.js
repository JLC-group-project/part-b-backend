const mongoose = require("./connection");

const OrderModel = mongoose.model(
  "Order",
  new mongoose.Schema({
    complete: {
      type: Boolean,
      required: true,
    },
    customer_info: {
      type: {
        first_name: String,
        last_name: String,
        email: String,
        phone_number: String,
      },
      required: true,
    },
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
  })
);

module.exports = OrderModel;
