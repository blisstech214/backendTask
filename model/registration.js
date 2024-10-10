const mongoose = require("mongoose");

const Registration = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  UserName: String,
  Email: {
    type: String,
  },
  Password: {
    type: String,
  },
  resetToken: { type: String },
  resetTokenExpiration: { type: Date },
});

const RegisterDetails = mongoose.model("regs", Registration);
module.exports = RegisterDetails;
