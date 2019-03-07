const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.methods.generateHash = password => {
  return bcrypt.hash(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = (password, pass) => {
  return bcrypt.compareSync(password, pass);
};

module.exports = mongoose.model("User", UserSchema);
