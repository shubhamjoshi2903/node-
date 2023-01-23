const express = require("express");

const router = express.Router();
const path = require("path");
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
  //   console.log("new middleware");
  //   console.log("req.body", req.body);
  //   res.send(`<H1>second middlewaresss${req.body}</h1`);
});
module.exports = router;
