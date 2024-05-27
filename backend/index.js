const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(`mongodb://localhost:27017/fuelprice`);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB Database connected");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
