var express = require("express");
const {
    getNewsById,
    getNews,
    listNews,
    postNews,
} = require("../controllers/newsController");


var router = express.Router();

router.get("/:id", getNewsById);
router.get("/list/:genres", listNews);
router.get("/search/:searchQuery", getNews);
router.post("/post", postNews);

module.exports = router;