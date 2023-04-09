const express = require("express");
const router = express.Router({ mergeParams: true });

const tasksRouter = require("./tasks");

router.use("/tasks", tasksRouter);

module.exports = router;