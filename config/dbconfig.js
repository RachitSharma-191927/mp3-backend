const mongoose = require("mongoose");
require("dotenv").config();

password = encodeURIComponent(process.env.password);

const db = mongoose.connect(
  `mongodb+srv://rachitsharmarashr:${password}@mp3go.k55xtw1.mongodb.net/?retryWrites=true&w=majority`,
  (err) => {
    if (err) console.log(err);
    else {
      console.log("Connected to the Atlas database");
    }
  }
);
module.exports.db = db;
