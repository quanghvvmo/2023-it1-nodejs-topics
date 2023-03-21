const routers = require("express").Router();
const userRouter = require("./user.route");

routers.use(userRouter);

module.exports = routers;
