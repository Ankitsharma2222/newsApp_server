var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.send({ news: "something positive" });
});

module.exports = router;