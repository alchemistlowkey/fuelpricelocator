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

app.get("/users", (req, res) => {
  User.find()
    .sort({ createdAt: "desc" })
    .then((users) => res.json(users))
    .catch((err) => {
      console.log(err);
    });
});

app.post("/users", (req, res) => {
  let user = new User(req.body);

  user
    .save()
    .then((user) => res.json(user))
    .catch((err) => {
      res.status(400).json("Error" + err);
    });
});

app.delete("/users/:id", (req, res) => {
  console.log(req.params.id);

  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User Deleted"))
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
