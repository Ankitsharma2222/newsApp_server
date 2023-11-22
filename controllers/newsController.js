const News = require("../Models/news.js");

const getNewsById = async (req, res, next) => {
    console.log("tatti")
    News.findById(req.params["id"])
    .then((newss)=>{
        if(!newss){
            throw new Error("No news Found")
        }
        res.send(newss)
    }).catch(err=>{
        res.status(500).send(e)
    })
};
const getallnews= (req,res)=>{
    News.find()
    .then((newss)=>{
        if(!newss){
            throw new Error("No news Found")
        }
        res.send(newss)
    }).catch(err=>{
        res.status(500).send(e)
    })
} 

const getNews = async (req, res, next) => {
    const search_query = req.params["searchQuery"];
    try {
        const news = await News.find({
            title: { $regex: new RegExp(`${search_query}`, `i`) },
        });
        if (!news) {
            throw new Error("No matching news found");
        }
        res.send(news);
    } catch (e) {
        res.status(500).send(e);
    }
};

const listNews = async (req, res, next) => {
    let { genre } = req.params;
    genre = genre.toLowerCase()
    console.log(genre)
       News.find(
            {
                genre: { $in: genre },
                
            },
            [
                "title",
                "link",
                "image_link",
                "summary",
                "date",
                "genre",
            ],
            { sort: "-date", limit: 12 }
        )
        .then((newss)=>{
            if(!newss){
                throw new Error("No news Found")
            }
            res.send(newss)
        }).catch(err=>{
            res.status(500).send(e)
        })
};

const postNews = async (req, res, next) => {
    const news_material = req.body;
    try {
        const news = await News.create(news_material);
        if (!news) {
            throw new Error("News not inserted.");
        }
        res.send(news);
    } catch (e) {
        res.status(500).send(e);
    }
};

module.exports = { getNewsById, getNews, postNews, listNews,getallnews };