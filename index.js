const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("./routes/nodemailer");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a server built with Express by gideon_cyber");
});

app.post("/api/nodemailer", (req, res) => {
  try {
    const { propertyValue, liveInProperty, userInputs } = req.body;
    nodemailer({ propertyValue, liveInProperty, userInputs });
    res.status(200).json({ message: "You have successfully registered" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server running on port " + port);
});
