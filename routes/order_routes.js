const express = require("express");
const router = express.Router();
const OrderModel = require("../db/order_model");
const MenuModel = require("../db/menu_model");

router.get("/", async (req, res) => {
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

  // for (order of orders) {
  //   for (o of order["orders"]) {
      // console.log(`Order: ${o["item"]}`)
      // o["item"] = await MenuModel.findById(o["item"])
      // OrderModel.findById(order).populate()
    // }
  //   order["order"][index]["item"] = await MenuModel.findById(
  //     order["order"][index]["item"]
  //   );
  // }

  // bar.then(() => {
  //   res.send(orders);
  // });
  // orders[0]["order"][0]["item"] = await MenuModel.findById(orders[0]["order"][0]["item"]);
    res.send(orders);
})

  
router.get("/:id", async (req, res) => {
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

    // for (o of order["orders"]) {
      // console.log(`Order: ${o["item"]}`)
      // o["item"] = await MenuModel.findById(o["item"])
    // }
  res.send(order);
});
      

router.post("/", async (req, res) => {
  const newOrder = await OrderModel.create(req.body)
  res.status(201).send(newOrder)
})

router.put("/:id", async (req, res) => {
  res.send(
    await OrderModel.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    })
  );
});


router.delete("/:id", async (req, res) => {
  OrderModel.findByIdAndDelete(req.params.id, () => res.sendStatus(204));
});

module.exports = router;