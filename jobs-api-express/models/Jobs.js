const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
        trim: true,
        maxlength: [100, "Title cannot be more than 100 characters"]
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
        required: [true, "Please provide a location"],
        trim: true,
        maxlength: [100, "Location cannot be more than 100 characters"]
    },
    remote: {
        type: Boolean,
        default: false
    },
    // experience: {
    //     type: String,
    //     enum: ["entry", "mid", "senior"],
    //     default: "entry"
    // },
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "User",
    //     required: true
    // }
}, {
    timestamps: true,
});
