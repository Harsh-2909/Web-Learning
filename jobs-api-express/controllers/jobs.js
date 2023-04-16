const { StatusCodes } = require("http-status-codes");
const Job = require("../models/Jobs");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllJobs = async (req, res, next) => {
    const jobs = await Job.find({ createdBy: req.user.id }).sort({ createdAt: -1 });
    return res.status(StatusCodes.OK).json({ success: true, count: jobs.length, jobs });
};

const getJob = async (req, res, next) => {
    const job = await Job.findOne({ _id: req.params.id, createdBy: req.user.id });
    if (!job) {
        throw new NotFoundError("Job not found");
    }
    return res.status(StatusCodes.OK).json({ success: true, job });
};

const createJob = async (req, res, next) => {
    req.body.createdBy = req.user.id;
    const job = await Job.create({ ...req.body });
    return res.status(StatusCodes.CREATED).json({ success: true, job });
};

const updateJob = async (req, res, next) => {
    const job = await Job.findOneAndUpdate({ _id: req.params.id, createdBy: req.user.id },
        req.body,
        { new: true, runValidators: true }
    );
    if (!job) {
        throw new NotFoundError("Job not found");
    }
    return res.status(StatusCodes.OK).json({ success: true, job });
};

const deleteJob = async (req, res, next) => {
    const job = await Job.findOneAndRemove({ _id: req.params.id, createdBy: req.user.id });
    if (!job) {
        throw new NotFoundError("Job not found");
    }
    return res.status(StatusCodes.OK).json({ success: true, job });
};

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
};