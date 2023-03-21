import express from "express";
import userController from "../controller/userController"

let router = express.Router();

let initWebRoute = (app) => {
    router.get('/', (req, res) => {
        return res.send('Hello world');
    });

    router.get('')
    router.post('/api/v1/user', userController.createUser)
    router.get('/api/v1/user', userController.getallUser)
    router.get('/api/v1/user/:id', userController.getUserbyId)
    router.patch('/api/v1/user/:id/active', userController.activeUser)
    router.patch('/api/v1/user/:id/inactive', userController.inactiveUser)
    router.delete('/api/v1/user/:id', userController.deleteUser)
    router.put('/api/v1/user', userController.updateUser)

    return app.use("/", router);
}
module.exports = initWebRoute;