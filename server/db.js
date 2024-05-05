const mongoose = require("mongoose");
const URL = process.env.MONGO_URL;

const connectDb = async () => {
    try {
        await mongoose.connect(URL)
        console.log("Connection Successfull")
    } catch (error) {
        console.log("Connection Failed")
        process.exit(0)
    }
}

module.exports = connectDb;