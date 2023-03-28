const orderRouter = require("express").Router();
const { createOrderController, updateOrderController, getOrdersController, deleteOrderController } = require("./orderController");
const middleware = require("../../middleware/middleware");

orderRouter.get("/api/v1/orders", middleware, getOrdersController);
orderRouter.post("/api/v1/orders", middleware, createOrderController);
orderRouter.put("/api/v1/orders/:id", middleware, updateOrderController);
orderRouter.delete("/api/v1/orders/:id", middleware, deleteOrderController);

module.exports = orderRouter;