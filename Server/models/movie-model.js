const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Movie = new Schema(
  {
        movieName:String,
        rating: Number,
        date: { 
          type: Date, 
          default: Date.now },
  },
  
);
module.exports= mongoose.model('movies',Movie) 