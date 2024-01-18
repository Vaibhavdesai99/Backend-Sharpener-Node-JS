// Importing the required module
const express = require("express");

// Creating a router instance using Express Router
const Router = express.Router();

// Middleware for handling GET requests to "/add-product"
Router.get("/add-product", (req, res, next) => {
  console.log("In the Another Middleware");
  // Sending a form for adding a product
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" > <input type="number" name="size"><button>ADD PRODUCT</button></form>'
  );
});

// Middleware for handling POST requests to "/product"
Router.post("/product", (req, res, next) => {
  // Logging the data received in the request body
  console.log(req.body);
  // Redirecting to the root ("/") after handling the POST request
  res.redirect("/");
});

// Exporting the router to be used in other parts of the application
module.exports = Router;
