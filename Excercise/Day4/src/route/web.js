import express from "express";
import userController from "../controller/userController"

let router = express.Router();

let initWebRoute = (app) => {
    router.get('/', (req, res) => {
        return res.send('Hello world');
    });
    router.post('/api/v1/user', userController.createUser)

    return app.use("/", router)
}
module.exports = initWebRoute;