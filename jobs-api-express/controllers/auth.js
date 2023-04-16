const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const { BadRequestError, UnauthorizedError } = require("../errors");

const login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!(email && password)) {
        throw new BadRequestError("Please provide an email & password");
    }
    const user = await User.findOne({ email: email });
    if (!user) {
        throw new UnauthorizedError("Invalid Credentials");
    }
    isCorrectPassword = await user.comparePassword(password);
    if (!isCorrectPassword) {
        throw new UnauthorizedError("Invalid Credentials");
    }
    const token = user.generateJWT();
    return res.status(StatusCodes.OK).json({ success: true, token: token });
};

const register = async (req, res, next) => {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
        throw new BadRequestError("A user with this email already exists");
    }
    user = await User.create({ name, email, password });
    const token = user.generateJWT();

    return res.status(StatusCodes.CREATED).json({ success: true, token: token });
};

module.exports = {
    login,
    register
};