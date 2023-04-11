const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom_error");

const login = async (req, res, next) => {
    const { username, password } = req.body;
    console.log(username, password);
    if (!(username && password)) {
        throw new CustomAPIError("Please provide a username & password", 400);
    }
    const token = jwt.sign({ id: 1, username }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return res.status(200).json({ success: true, secret: token, message: "User created" });
};

const dashboard = async (req, res, next) => {
    const random = Math.floor(Math.random() * 100);
    return res.status(200).json({ success: true, user: req.user.username, secret: random });
};

module.exports = {
    login,
    dashboard
};