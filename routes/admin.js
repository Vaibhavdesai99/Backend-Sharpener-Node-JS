// Importing the required module
const express = require("express");

const Router = express.Router();

Router.get("/add-product", (req, res, next) => {
  console.log("In the Another Middleware");

  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title" > <input type="number" name="size"><button>ADD PRODUCT</button></form>'
  );
});

Router.post("/add-product", (req, res, next) => {
  console.log(req.body);

  res.redirect("/");
});

module.exports = Router;
