const Task = require('../models/Task');

const getAllTasks = async function (req, res) {
    try {
        const tasks = await Task.find({});
        return res.status(200).json({ success: true, data: tasks });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const createTask = async function (req, res) {
    try {
        const { name, description, completed } = req.body;
        if (!name) {
            return res.status(400).json({ success: false, error: "Name is required" });
        }
        const task = await Task.create({
            name: name,
            description: description,
            completed: completed
        });
        return res.status(201).json({ success: true, data: task });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const getTask = async function (req, res) {
    try {
        const { id } = req.params;
        const task = await Task.findById({ _id: id });
        if (!task) {
            return res.status(404).json({ success: false, error: "Task not found" });
        }
        return res.status(200).json({ success: true, data: task });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const updateTask = async function (req, res) {
    try {
        const { id } = req.params;
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ success: false, error: "Name is required" });
        } else if (name.length > 45) {
            return res.status(400).json({ success: false, error: "Name is too long" });
        }

        const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
            new: true,
            runValidators: true
        });
        if (!task) {
            return res.status(404).json({ success: false, error: "Task not found" });
        }

        return res.status(200).json({ success: true, data: task });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const deleteTask = async function (req, res) {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete({ _id: id });
        if (!task) {
            return res.status(404).json({ success: false, error: "Task not found" });
        }
        return res.status(200).json({ success: true, data: task, message: "Deleted Successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};