const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../utils/path");

// admin/add-product=>GET request
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
  console.log("8_admin.js");
  // res.redirect("/add-product");
  //next() Allow the request to continue to the another middleware in line.
});

// admin/add-product=>POST request
router.post("/add-product", (req, res) => {
  console.log("15_admin.js");
  console.log("req.body", req.body.title);
  //   res.redirect("/");
  res.send(`<H1>second middlewaresss:------- ${req.body.title}</h1`);
});

module.exports = router;
