const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

const salt = bcrypt.genSaltSync(10);
const secret = "asdfghjkl";

app.use(cors({ credentials: true, origin: "http://localhost:5173/login" }));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://mern:blog123456@cluster0.dehq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  // res.json(userDoc);
  const passOk = bcrypt.compareSync(password, userDoc.password);
  // res.json(passOk);

  if (passOk) {
    //logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json("ok");
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.listen(4000);

// blog123456
