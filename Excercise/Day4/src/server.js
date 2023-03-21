import express from "express";
import bodyParser from "body-parser";
import initWebroutes from "./route/web";
import connectDB from "./config/database"
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


initWebroutes(app);
connectDB();

let port = process.env.PORT;

app.listen(port, () => {
    console.log("Sever is running on Port:" + port)
})