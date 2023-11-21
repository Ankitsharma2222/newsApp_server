const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        link: {
            type: String,
            required: true,
            trim: true,
        },
        image_link: {
            type: String,
            trim: true,
            default: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXa9kiTpuH7GNokQU7fRERMuf2IQPo_HUBN_DPSHLly4zNDvT8ap9D4khIPPP4aQV7rq8&usqp=CAU` 
        },
        summary: {
            type: String,
            required: true,
            trim: true
        },
        date: {
            type: Date,
            required: true,
        },
        genre: {
            type: String,
            required: true,
            trim: true,
        }
    }
);
 
module.exports = mongoose.model("News", newsSchema);