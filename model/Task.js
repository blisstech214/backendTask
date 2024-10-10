const mongoose = require("mongoose");

const userData = new mongoose.Schema({
  serialNumber: {
    type: Number,
  },
  date: {
    type: String,
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
