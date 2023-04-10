const Task = require('../models/Task');
/**
 * @typedef Task
 * @property {string} name - The name of the task (required)
 * @property {string} description - A description of the task
 * @property {boolean} completed - Whether the task is completed or not
 */

/**
 * @route GET /tasks
 * @summary Get a list of tasks
 * @tags Tasks
 * @return {array<Task>} 200 - An array of task objects
 * @return {Error} 500 - An error occurred
 */
const getAllTasks = async function (req, res) {
    try {
        const tasks = await Task.find({});
        return res.status(200).json({ success: true, data: tasks });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

/**
 * @route POST /tasks
 * @summary Create a new task
 * @tags Tasks
 * @param {Task} request.body.required - The task to create
 * @return {Task} 201 - The created task object
 * @return {Error} 400 - The request was invalid
 * @return {Error} 500 - An error occurred
 */
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

/**
 * @route GET /tasks/:id
 * @summary Get a task by ID
 * @tags Tasks
 * @param {string} id.path.required - The ID of the task to retrieve
 * @return {Task} 200 - The task object
 * @return {Error} 404 - The task was not found
 * @return {Error} 500 - An error occurred
 */
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

/**
 * @route PUT /tasks/:id
 * @summary Update a task by ID
 * @tags Tasks
 * @param {string} id.path.required - The ID of the task to update
 * @param {Task} request.body.required - The updated task object
 * @return {Task} 200 - The updated task object
 * @return {Error} 400 - The request was invalid
 * @return {Error} 404 - The task was not found
 * @return {Error} 500 - An error occurred
 */
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

/**
 * @route DELETE /tasks/:id
 * @summary Delete a task by ID
 * @tags Tasks
 * @param {string} id.path.required - The ID of the task to delete
 * @return {Task} 200 - The task was deleted successfully
 * @return {Error} 404 - The task was not found
 * @return {Error} 500 - An error occurred
 */
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