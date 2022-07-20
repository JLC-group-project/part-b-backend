const express = require("express");

const app = express();

// app.use tells Express to execute some middleware at this stage
// of the request-response cycle.
// In this case, we're executing express.json(), a middleware that
// does a JSON.parse on the incoming request body, then sets req.body
// to the result so that later middleware (including routes) can access it.
// We do this before any routes, in case a route needs req.body
app.use(express.json())

const cors = require("cors");
app.use(cors());

const apiV1Routes = require("./routes");
app.use("/api/v1", apiV1Routes);

app.get("/", (req, res) => res.send("<h1>Coder Cafe API</h1>"));

module.exports = app;