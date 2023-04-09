const express = require('express');
const morgan = require('morgan');
const dotenv = require("dotenv")
const router = require("./routes");
const connectToMongo = require('./db');

dotenv.config();
connectToMongo();
const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json())
app.use(morgan("dev"))
app.use("/api/v1", router)

app.get("/healthcheck", (req, res) => {
    res.json({success: true, message: 'Server is up and running'});
})

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
})