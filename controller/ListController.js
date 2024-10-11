const Task = require("../model/Task");

const todoList = async (req, res) => {
  try {
    const { serialNumber, date, taskName, aboutTask, taskStatus } = req.body;
    const getData = new Task({
      serialNumber,
      date,
      taskName,
      aboutTask,
      taskStatus,
    });
    await getData.save();
    console.log(getData);

    res.json({
      data: getData,
    });
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};
// task get
const taskData = async (req, res) => {
  // console.log("asd");
  try {
    const taskDataGet = await Task.find();
    res.json({
      Data: taskDataGet,
    });
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};

// get data by serial num
const GetSingleData = async (req, res) => {
  try {
    const Id = req.params.sn;

    const data = await Task.findOne({ serialNumber: Id });
    console.log(data);
    res.json({
      data: data,
    });
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};

// update data by serial num
const updateData = async (req, res) => {
  try {
    const { serialNumber, date, taskName, aboutTask, taskStatus } = req.body;

    const updatedData = await Task.findOneAndUpdate(
      { serialNumber: serialNumber },
      {
        $set: {
          date: date,
          taskName: taskName,
          aboutTask: aboutTask,
          taskStatus: taskStatus,
        },
      },
      { new: true }
    );
    res.json({ data: updatedData });
  } catch (error) {
    res.json({ error: error.message });
  }
};
const deleteNote = async (req, res) => {
  try {
    const objectID = req.params.serialNumber;
    const deleteGet = await Task.deleteOne({ serialNumber: objectID });
    console.log("del", deleteGet);
    res.json({
      Data: deleteGet,
      Message: "user data Delete",
    });
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};

module.exports = {
  todoList,
  taskData,
  updateData,
  GetSingleData,
  deleteNote,
};
