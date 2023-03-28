const routers = require("express").Router();
const userRouter = require("./user/userRoute");
const productRouter = require("./product/productRoute");
const orderRouter = require("./order/orderRoute");

routers.use(userRouter);
routers.use(productRouter);
routers.use(orderRouter);

module.exports = routers;
