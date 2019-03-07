const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  participants: [{ type: String, ref: "User" }]
});

module.exports = mongoose.model("Chat", ChatSchema);
