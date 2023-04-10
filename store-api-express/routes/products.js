const express = require("express");
const { getAllProducts } = require("../controllers/products");

const productsRouter = express.Router();

productsRouter.get("/", getAllProducts);

module.exports = productsRouter;