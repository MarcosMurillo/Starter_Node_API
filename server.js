//Importing Dependences
const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

//Starting to App
const app = express();
app.use(express.json());
app.use(cors());

//Starting to DataBase
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true
});

//importing schemas
requireDir("./src/models");

//routes
app.use("/api", require("./src/routes"));

//Runing Port Browser
app.listen(3001);
