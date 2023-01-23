const express = require("express");

const router = express.Router();
const path = require("path");
router.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "../", "views", "error.html"));

  //   console.log("new middleware");
  //   console.log("req.body", req.body);
  //   res.send(`<H1>second middlewaresss${req.body}</h1`);
});
module.exports = router;
