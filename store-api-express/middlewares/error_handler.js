const errorHandlerMiddleware = async (err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).json({ success: false, error: "Something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;