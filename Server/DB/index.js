const mongoose = require("mongoose");
const dbConnection = "mongodb+srv://Adiv:adiv12345@cluster0.o68oj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(dbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
