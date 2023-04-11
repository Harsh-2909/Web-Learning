const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom_error");

const authenticator = async (req, res, next) => {
    const { authorization: authHeader } = req.headers;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new CustomAPIError("Invalid credentials to access this route", 401);
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decoded;
        req.user = { id, username };
    } catch (error) {
        throw new CustomAPIError("Invalid credentials to access this route", 401);
    }
    next();
};

module.exports = authenticator;