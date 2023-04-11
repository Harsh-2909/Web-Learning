const dotenv = require("dotenv");
const jsonProducts = require("./products.json");
const Product = require("./models/Product");
const connectToMongo = require("./db");
dotenv.config();

const populate = async () => {
    try {
        await connectToMongo(process.env.MONGO_URI);
        console.log("Connected to DB!");
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log("Success!");
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
populate();