const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  chatID: { type: String, ref: "Chat" },
  userID: { type: String, ref: "User" },
  body: String
});

module.exports = mongoose.model("Message", MessageSchema);
