const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
        trim: true,
        maxlength: [50, "Title cannot be more than 50 characters"]
    },
    description: {
        type: String,
        required: [true, "Please provide a description"],
        maxlength: [500, "Description cannot be more than 500 characters"]
    },
    salary: {
        type: Number,
        required: [true, "Please provide a salary"]
    },
    company: {
        type: String,
        required: [true, "Please provide a company"],
        trim: true,
        maxlength: [100, "Company cannot be more than 100 characters"]
    },
    location: {
        type: String,
        trim: true,
        maxlength: [100, "Location cannot be more than 100 characters"]
    },
    status: {
        type: String,
        enum: {
            values: ["pending", "interview", "accepted", "declined"],
            message: "Status is either: pending, interview, accepted or declined"
        },
        default: "pending"
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "Please provide a user"]
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Job", jobSchema);