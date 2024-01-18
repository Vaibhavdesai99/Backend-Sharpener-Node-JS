const express = require("express");

const Router = express.Router();

Router.get("/", (req, res, next) => {
  console.log("In the Another Middleware");
  res.send("<h1>Hello from express</h1>");
});

module.exports = Router;
