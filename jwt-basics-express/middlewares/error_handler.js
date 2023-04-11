const CustomAPIError = require("../errors/custom_error");

const errorHandlerMiddleware = async (err, req, res, next) => {
    console.error(err.stack);
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ success: false, error: err.message });
    }
    return res.status(500).json({ success: false, error: "Something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;