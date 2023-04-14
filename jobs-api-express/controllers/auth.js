const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors");

const login = async (req, res, next) => {
    // const { username, password } = req.body;
    // console.log(username, password);
    // if (!(username && password)) {
    //     throw new BadRequestError("Please provide a username & password");
    // }
    // const token = jwt.sign({ id: 1, username }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return res.status(200).json({ success: true });
};

const register = async (req, res, next) => {
    return res.status(200).json({ success: true });
};

module.exports = {
    login,
    register
};