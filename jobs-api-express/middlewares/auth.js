const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../errors");

const authenticator = async (req, res, next) => {
    const { authorization: authHeader } = req.headers;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthorizedError("Invalid credentials to access this route");
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // const { id, username } = decoded;
        // req.user = { id, username };
    } catch (error) {
        throw new UnauthorizedError("Invalid credentials to access this route");
    }
    next();
};

module.exports = authenticator;