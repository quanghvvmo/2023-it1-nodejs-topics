const routers = require("express").Router();
const userRouter = require("./user/user.route");
const orderRouter = require("./order/order.route");
const productRouter = require("./product/product.route")

routers.use(userRouter);
routers.use(orderRouter);
routers.use(productRouter);

module.exports = routers;
