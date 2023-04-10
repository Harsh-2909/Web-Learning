const express = require('express');
const morgan = require('morgan');
const dotenv = require("dotenv");
const router = require("./routes");
const connectToMongo = require('./db');

dotenv.config();
connectToMongo();
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1", router);
app.use("*", (req, res) => {
  res.status(404).json({ method: req.method, route: req.baseUrl, error: "This route does not exists" });
});

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});