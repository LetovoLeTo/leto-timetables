const express = require("express");
const { join } = require("path");

const app = express();

app.use("/schedule", express.static(join(__dirname, "html")));
app.get("/schedule", (req, res) => {
    res.sendFile(join(__dirname, "html/index.html"));
});

module.exports = app;