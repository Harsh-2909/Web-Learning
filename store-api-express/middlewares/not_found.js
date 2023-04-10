const notFound = (req, res) => {
    res.status(404).json({ method: req.method, route: req.baseUrl, error: "This route does not exists" });
};

module.exports = notFound;