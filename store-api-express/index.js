const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const expressAsyncErrors = require("express-async-errors");
const router = require("./routes");
const connectToMongo = require('./db');
const notFoundMiddleware = require("./middlewares/not_found");
const errorMiddleware = require("./middlewares/error_handler");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1", router);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
    try {
        await connectToMongo(process.env.MONGO_URI);
        console.log("CONNECTED TO MONGO DB DATABASE 🌐");
        app.listen(PORT, console.log(`Server running at PORT: ${PORT}`));
    } catch (error) {
        console.error(error);
    }
};
start();