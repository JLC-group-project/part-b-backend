const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Create a connection to Mongoose
mongoose
  .connect(process.env.ATLAS_DB_URL)
  .then(() =>
    console.log(
      mongoose.connection.readyState == 1
        ? "Mongoose connected"
        : "Mongoose failed"
    )
  )
  .catch((err) => console.log(err));

module.exports = mongoose;
