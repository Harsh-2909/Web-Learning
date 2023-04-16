const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../errors");
const User = require("../models/User");

const authenticator = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthorizedError("Invalid Credentials");
    }
    const token = authHeader.split(" ")[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        // TOOD: Good for checking if user is deleted but not required in a Production App
        // const user = await User.findById(payload.userId).select("-password");
        // if (!user) {
        //     throw new UnauthorizedError("Invalid Credentials");
        // }
        // req.user = user;
        req.user = { id: payload.userId };
    } catch (error) {
        throw new UnauthorizedError("Invalid Credentials");
    }
    next();
};

module.exports = authenticator;