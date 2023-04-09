const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide name"],
        trim: true,
        alias: "title",
        maxLength: [45, "name can not be more than 45 characters"]
    },
    description: {
        type: String,
        // required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;