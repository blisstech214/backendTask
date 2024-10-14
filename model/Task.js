const mongoose = require("mongoose");

const userData = new mongoose.Schema({
  serialNumber: {
    type: Number,
  },
  date: {
    type: Date, // Use "Date" with a capital "D"
  },
  taskName: {
    type: String,
  },
  aboutTask: {
    type: String,
  },
  taskStatus: {
    type: String,
  },
});

const TaskManager = mongoose.model("taskDetails", userData);

module.exports = TaskManager;
