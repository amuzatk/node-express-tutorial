const express = require("express");
const { 
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTasks
 } = require("../controllers/Tasks");
const router = express.Router();

// router.get("/", getAllTasks);
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").patch(updateTask).delete(deleteTasks).get(getTask);

module.exports = router;