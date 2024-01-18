// Importing the required modules
const express = require("express");
const bodyparser = require("body-parser");

// Creating an instance of the Express application
const app = express();

// Importing route files
const adminRoutes = require("../Backend-Sharpener/routes/admin");
const shopRoutes = require("../Backend-Sharpener/routes/shop");

// Middleware to parse incoming request bodies
// If you don't use this middleware, req.body will be undefined for POST requests
app.use(bodyparser.urlencoded({ extended: false }));

// Using the imported routes
app.use(shopRoutes);
app.use(adminRoutes);

// Middleware for handling 404 errors (Page Not Found)
app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

// Setting up the server to listen on port 3000
app.listen(3000);
