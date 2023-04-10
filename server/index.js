const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./database/db");

dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`.bgGreen.white);
});
