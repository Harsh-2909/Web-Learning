const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectToMongo = () => {
    mongoose
        .connect(process.env.MONGO_URI, option)
        .then(() => {
            console.log('CONNECTED TO MONGO DB DATABASE 🌐');
        })
        .catch((err) => {
            console.error(`Error connecting to Mongo DB database: ${err.message}`);
        });
};

module.exports = connectToMongo;
