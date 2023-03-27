import express from "express";
import userController from "../controller/userController"
import productController from "../controller/productController"

let router = express.Router();

let initWebRoute = (app) => {
    router.get('/', (req, res) => {
        return res.send('Hello world');
    });
    //Sequelize
    router.post('/api/v1/user', userController.createUser)
    router.get('/api/v1/user', userController.getallUser)
    router.get('/api/v1/user/:id', userController.getUserbyId)
    router.patch('/api/v1/user/:id/active', userController.activeUser)
    router.patch('/api/v1/user/:id/inactive', userController.inactiveUser)
    router.delete('/api/v1/user/:id', userController.deleteUser)
    router.put('/api/v1/user', userController.updateUser)

    router.post('/api/v1/product', productController.createProduct)
    router.get('/api/v1/product', productController.getListProduct)

    //Mongo
    router.get('/api/v2/user', userController.getAllUserMongo)
    router.post('/api/v2/user', userController.createUserMongo)
    router.put('/api/v2/user', userController.updateUserMongo)

    return app.use("/", router);
}
module.exports = initWebRoute;