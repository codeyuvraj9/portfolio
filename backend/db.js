const mongoose = require('mongoose');
const mongoURI = "";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
        const fetched_data = await mongoose.connection.db.collection("portfolios").find({}).toArray();
        
        global.reviews = fetched_data;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = mongoDB;