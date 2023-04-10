const express = require("express");
const router = express.Router({ mergeParams: true });

const productsRouter = require("./products");

router.use("/products", productsRouter);

module.exports = router;