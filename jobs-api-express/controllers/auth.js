const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const { BadRequestError, UnauthorizedError } = require("../errors");

const login = async (req, res, next) => {
    // const { username, password } = req.body;
    // console.log(username, password);
    // if (!(username && password)) {
    //     throw new BadRequestError("Please provide a username & password");
    // }
    // const token = jwt.sign({ id: 1, username }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return res.status(StatusCodes.OK).json({ success: true });
};

const register = async (req, res, next) => {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
        throw new BadRequestError("A user with this email already exists");
    }
    user = await User.new({ name, email, password });
    user.save();

    return res.status(StatusCodes.CREATED).json({ success: true, user: user });
};

module.exports = {
    login,
    register
};