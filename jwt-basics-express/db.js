const mongoose = require('mongoose');

const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectToMongo = (connectionString) => {
    return mongoose.connect(connectionString, option);
};

module.exports = connectToMongo;
