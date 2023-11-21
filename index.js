var createError = require("http-errors");
var express = require("express");
var path = require("path");
var PORT=5000
var cors = require("cors");



var app = express();
const indexRouter = require("./Routes/index");

// var usersRouter = require("./routes/users");
// var newsRouter = require("./routes/news");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use("/news", newsRouter);


app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})    