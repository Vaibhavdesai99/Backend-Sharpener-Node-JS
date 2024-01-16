const express = require("express");
const bodyparser = require("body-parser");
const app = express();

//to get data from req.body we used this if we not using this then it shows undefined .
app.use(bodyparser.urlencoded());

app.use("/add-product", (req, res, next) => {
  console.log("In the Another Middleware");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" ><button>ADD PRODUCT</button></form>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  console.log("In the Another Middleware");
  res.send("<h1>Hello from express</h1>");
});

app.listen(3000);
