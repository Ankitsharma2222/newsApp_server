var express = require("express");
const {
    getNewsById,
    getNews,
    listNews,
    postNews,
    getallnews
} = require("../controllers/newsController");


var router = express.Router();
router.get("/",getallnews)
router.get("/:id", getNewsById);
router.get("/list/:genre", listNews);
// router.get("/search/:searchQuery", getNews);
router.post("/post", postNews);
module.exports = router;