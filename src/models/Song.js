const mongoose = require("mongoose");

// Define the schema for a "Restaurant" record
// MongoDB automatically adds an id with property "_id" on every record
const songSchema = new mongoose.Schema({
  name: String,
  link: String,
  artist: String,
  album:String
});

module.exports = mongoose.model("Song", songSchema);
