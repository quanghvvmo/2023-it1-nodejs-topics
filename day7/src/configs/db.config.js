const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Database connection successful");
});

db.on("error", () => {
    console.log("Error in mongodb connection");
});

module.exports = mongoose;
