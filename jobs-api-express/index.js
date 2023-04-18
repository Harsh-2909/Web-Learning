const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const expressAsyncErrors = require("express-async-errors");
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");
const router = require("./routes");
const connectToMongo = require('./db');
const notFoundMiddleware = require("./middlewares/not_found");
const errorMiddleware = require("./middlewares/error_handler");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV.toUpperCase() || "DEVELOPMENT";
const morgan_mode = ENV === "PRODUCTION" ? "tiny" : "dev";

// Middlewares
app.set("trust proxy", 1);
app.use(rateLimiter({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100 // limit each IP to 100 requests per windowMs

}));
app.use(express.json());
app.use(morgan(morgan_mode));
app.use(helmet());
app.use(cors());
app.use(xss());

// API Routes
app.use("/api/v1", router);

// Error Handlers
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