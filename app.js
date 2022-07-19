const express = require("express");

const OrderModel = require("./db/order_model")
const app = express();

const apiV1Routes = require("./routes");
app.use("/api/v1", apiV1Routes);

const cors = require("cors")
app.use(cors())


const categories = ["Drinks", "Bakery"]
const items = [
  { name: "Black", category: "Drink", price: 1 },
  { name: "Cappucino", category: "Drink", price: 2.5 },
  { name: "Flat White", category: "Drink", price: 3 },
  { name: "Latte", category: "Drink", price: 4.5 },
  { name: "Mocha", category: "Drink", price: 5 },
];

const order1 = {
  order: [
    { quantity: 3, item: { name: "Black", category: "Drink", price: 1 } },
    { quantity: 2, item: { name: "Cappucino", category: "Drink", price: 2.5 } },
    9
  ]
}
const order2 = {
  order: [
    { quantity: 4, item: { name: "Latte", category: "Drink", price: 4.5 } },
    { quantity: 5, item: { name: "Mocha", category: "Drink", price: 5 } },
    43,
  ]
}

const orders = [order1, order2]

// app.use tells Express to execute some middleware at this stage
// of the request-response cycle.
// In this case, we're executing express.json(), a middleware that
// does a JSON.parse on the incoming request body, then sets req.body
// to the result so that later middleware (including routes) can access it.
// We do this before any routes, in case a route needs req.body
app.use(express.json())

app.get("/", (req, res) => res.send("<h1>Coder Cafe API</h1>"));

module.exports = app;