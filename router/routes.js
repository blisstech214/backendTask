// router.js
const express = require("express");
const controller = require("../controller/controller");
const controllerTask = require("../controller/ListController");
const router = express.Router();
const verifyToken = require("../middleware/jwt");
// register/login api
router.post("/register", controller.regPost);
router.post("/login", controller.login);
// task api
router.post("/taskPost", controllerTask.todoList);
router.get("/getTaskData", controllerTask.taskData);

router.get("/getOne/:sn", controllerTask.GetSingleData);
router.put("/getUpdate/:sn", controllerTask.updateData);

router.delete("/delete/:serialNumber", controllerTask.deleteNote);
// password api
router.get("/user", verifyToken, controller.getUserData);

router.post("/forgotPassword", controller.Forgot);
router.post("/resetPassword/:token", controller.Reset);
module.exports = router;
