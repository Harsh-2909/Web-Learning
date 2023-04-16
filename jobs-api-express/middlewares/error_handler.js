const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = async (err, req, res, next) => {
    console.error(err.stack);

    // Custom Errors
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ success: false, error: err.message });
    }

    // Mongoose Validation Errors 
    if (err.name === "ValidationError") {
        const messages = Object.values(err.errors).map((val) => val.message);
        return res.status(StatusCodes.BAD_REQUEST).json({ success: false, error: messages.join(", ") });
    }

    // Mongoose Duplicate Key Errors
    if (err.code && err.code === 11000) {
        return res.status(StatusCodes.BAD_REQUEST).json({ success: false, error: `Duplicate field value entered for ${Object.keys(err.keyValue)}` });
    }

    // Mongoose Cast Errors
    if (err.name === "CastError") {
        return res.status(StatusCodes.NOT_FOUND).json({ success: false, error: `Resource not found with id of ${err.value}` });
    }

    // Default Error
    if (process.env.NODE_ENV.toUpperCase() === "PRODUCTION") {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, error: "Something went wrong, please try again" });
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, error: err });
};

module.exports = errorHandlerMiddleware;