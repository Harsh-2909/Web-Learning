const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = async (err, req, res, next) => {
    console.error(err.stack);
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ success: false, error: err.message });
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, error: "Something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;