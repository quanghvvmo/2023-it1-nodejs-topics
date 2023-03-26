const orderRouter = require("express").Router();
const {
    createOrderController,
    updateOrderController,
    getOrdersController,
    deleteOrderController,
} = require("./order.controller");
const authenMiddleware = require("../../middlewares/authen.middleware");

orderRouter.get("/api/v1/orders", authenMiddleware, getOrdersController);

orderRouter.post("/api/v1/orders", authenMiddleware, createOrderController);

orderRouter.put("/api/v1/orders/:id", authenMiddleware, updateOrderController);

orderRouter.delete("/api/v1/orders/:id", authenMiddleware, deleteOrderController);

module.exports = orderRouter;
