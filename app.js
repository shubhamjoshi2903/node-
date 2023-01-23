const express = require("express");
const bodyParser = require("body-parser");
const { process_params } = require("express/lib/router");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorRoutes = require("./routes/error");

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorRoutes);

app.listen(8000);
/Users/shubhamjoshi/Desktop/Backend(Node.js)/node-/app.js