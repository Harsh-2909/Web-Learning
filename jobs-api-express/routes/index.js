const express = require("express");
const authenticator = require("../middlewares/auth");
const authRouter = require("./auth");
const jobsRouter = require("./jobs");
const router = express.Router({ mergeParams: true });

router.use("/auth", authRouter);
// router.use("/jobs", authenticator, jobsRouter);
router.use("/jobs", jobsRouter);

module.exports = router;