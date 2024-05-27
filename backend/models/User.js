const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productEnum = ["PMS", "AGO", "LPG"];

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    product: {
      type: String,
      enum: productEnum,
      required: true,
    },
    stationName: {
      type: String,
      required: [true, "Please enter the fueling station name"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
