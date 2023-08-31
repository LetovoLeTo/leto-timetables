const express = require("express");
const { join } = require("path");

const router = express.Router();

router.use("/schedule", express.static(join(__dirname, "html")));
router.get("/schedule", (req, res) => {
    res.sendFile(join(__dirname, "html/index.html"));
});

module.exports = router;