const express = require("express");
const MenuModel = require("./db/menu_model");
const app = express();

const categories = ["Drinks", "Bakery"]
const items = [
  { name: "Black", category: "Drink", price: 1 },
  { name: "Cappucino", category: "Drink", price: 2.5 },
  { name: "Flat White", category: "Drink", price: 3 },
  { name: "Latte", category: "Drink", price: 4.5 },
  { name: "Mocha", category: "Drink", price: 5 },
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

app.get("/menu", async (req, res) => {
  const items = await MenuModel.find()
  res.send(items)
})

app.get("/menu/:id", async (req, res) => {
  const item = await MenuModel.findById(req.params.id)
  res.send(item)
})

app.post("/menu", async (req, res) => {
  const item = {
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
  };
  const newItem = await MenuModel.create(item) 
  res.status(201).send(newItem)
})

app.put("/menu/:id", async (req, res) => {
  res.send(
    await MenuModel.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after"
    })
  )
})

app.delete("/menu/:id", async (req, res) => {
  MenuModel.findByIdAndDelete(req.params.id, () => res.sendStatus(204))
})

app.get("/orders", (req, res) => res.status.send(orders));

module.exports = app;