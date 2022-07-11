const express = require("express");
const app = express();

const categories = ["Drinks", "Bakery"]
const items = [
  { name: "Black", category: "Drink", price: "$1" },
  { name: "Cappucino", category: "Drink", price: "$2" },
  { name: "Flat White", category: "Drink", price: "$3" },
  { name: "Latte", category: "Drink", price: "$4" },
  { name: "Mocha", category: "Drink", price: "$5" },
];
const orders = []

// app.use tells Express to execute some middleware at this stage
// of the request-response cycle.
// In this case, we're executing express.json(), a middleware that
// does a JSON.parse on the incoming request body, then sets req.body
// to the result so that later middleware (including routes) can access it.
// We do this before any routes, in case a route needs req.body
app.use(express.json())

app.get("/", (req, res) => res.send("<h1>Coder Cafe API</h1>"));
app.get("/menu", (req, res) => res.send(items))
app.post("/menu", (req, res) => {
  const item = {
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
  };
  orders.push(item)
  res.status(201).send(item)
})

app.get("/orders", (req, res) => res.send(orders));

module.exports = app;