const express = require("express");
const { getAllJobs, getJob, createJob, updateJob, deleteJob } = require("../controllers/jobs");
const jobsRouter = express.Router();

jobsRouter.get("/", getAllJobs);
jobsRouter.post("/", createJob);
jobsRouter.get("/:id", getJob);
jobsRouter.patch("/:id", updateJob);
jobsRouter.delete("/:id", deleteJob);

module.exports = jobsRouter;