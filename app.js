const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/images", express.static("images"));

const webRoutes = require("./routes/web");

app.use("/", webRoutes);

module.exports = app;
