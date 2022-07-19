const express = require("express");
const MenuModel = require("./db/menu_model");
const OrderModel = require("./db/order_model")
const app = express();

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

app.get("/orders", async (req, res) => {
  const orders = await OrderModel.find();
  // Find Menu item and replace item id with an item object
  // var bar = new Promise((resolve, reject) => {
  //   orders.forEach((order, index) => {
  //     order["order"].forEach(async (value, index) => {
  //       order["order"][index]["item"] = await MenuModel.findById(order["order"][index]["item"])
  //       if (index === orders.length - 1) resolve();
  //     });
  //   })
  // })

  for (order of orders) {
    for (o of order["orders"]) {
      // console.log(`Order: ${o["item"]}`)
      o["item"] = await MenuModel.findById(o["item"])
      // OrderModel.findById(order).populate()
    }
  //   order["order"][index]["item"] = await MenuModel.findById(
  //     order["order"][index]["item"]
  //   );
  }

  // bar.then(() => {
  //   res.send(orders);
  // });
  // orders[0]["order"][0]["item"] = await MenuModel.findById(orders[0]["order"][0]["item"]);
    res.send(orders);
})

  
app.get("/orders/:id", async (req, res) => {
  let order = await OrderModel.findById(req.params.id);

  // Find Menu item and replace item id with an item object
  // order["order"].forEach(async (value, index) => {
  //   order["order"][index]["item"] = await MenuModel.findById(
  //     order["order"][index]["item"]
  //   );
  // });

  // order["order"][0]["item"] = await MenuModel.findById(
  //   order["order"][0]["item"]
  // );
  // fix this later for async update

    for (o of order["orders"]) {
      // console.log(`Order: ${o["item"]}`)
      o["item"] = await MenuModel.findById(o["item"])
    }
  res.send(order);
});
      

app.post("/orders", async (req, res) => {
  const newOrder = await OrderModel.create(req.body)
  res.status(201).send(newOrder)
})

app.put("/orders/:id", async (req, res) => {
  res.send(
    await OrderModel.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    })
  );
});


app.delete("/orders/:id", async (req, res) => {
  OrderModel.findByIdAndDelete(req.params.id, () => res.sendStatus(204));
});
module.exports = app;