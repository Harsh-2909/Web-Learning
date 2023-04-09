const getAllTasks = async function(req, res) {
    // const tasks = await Task.find({});
    // res.json({tasks});
    res.json({message: "Get all tasks working"})
}

const createTask = async function(req, res) {
    res.json({message: "Create task working"})
}

const getTask = async function(req, res) {
    res.json({message: "Get task working"})
}

const updateTask = async function(req, res) {
    res.json({message: "Update task working"})
}

const deleteTask = async function(req, res) {
    res.json({message: "Delete task working"})
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}