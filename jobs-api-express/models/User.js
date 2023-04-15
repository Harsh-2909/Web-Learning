const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true,
        maxlength: [40, "Name cannot be more than 40 characters"]
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true, // Unique is not a validator, it creates a unique index in the database
        trim: true,
        maxlength: [50, "Email cannot be more than 50 characters"],
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please provide a valid email"
        ]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: [6, "Password cannot be less than 6 characters"],
    },
}, {
    timestamps: true,
});

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.getSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model("User", userSchema);