import express from "express";
import bodyParser from "body-parser";
import initWebroutes from "./route/web";
import connectDB from "./config/database"
//import connectDB from "./config/connectMongo"
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();
initWebroutes(app);

let port = process.env.PORT;

module.exports = app.listen(port, () => {
    console.log("Sever is running on Port:" + port)
})