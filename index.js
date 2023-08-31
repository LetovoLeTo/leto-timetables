const express = require("express");
const { join } = require("path");

const app = express();

app.use("/megaaboba", express.static(join(__dirname, "html")));
app.get("/megaaboba", (req, res) => {
    res.sendFile(join(__dirname, "html/index.html"));
});

module.exports = app;