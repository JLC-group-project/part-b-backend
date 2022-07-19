const express = require("express");
const router = express.Router();
const menuRoutes = require("../routes/menu_routes");
const orderRoutes = require("../routes/order_routes");

router.use("/menu", menuRoutes);
router.use("/orders", orderRoutes);

module.exports = router;
