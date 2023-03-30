import express from "express";
import bodyParser from "body-parser";
import initWebroutes from "./route/web";
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs'
import connectDB from "./config/database"
//import connectDB from "./config/connectMongo"
require('dotenv').config();
const swaggerJsDocs = YAML.load('api.yaml')
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs))

connectDB();
initWebroutes(app);

let port = process.env.PORT;

module.exports = app.listen(port, () => {
    console.log("Sever is running on Port:" + port)
})