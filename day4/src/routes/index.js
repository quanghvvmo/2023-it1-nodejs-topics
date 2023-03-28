const routers = require("express").Router();
import userRouter from "./user.route";

routers.use(userRouter);

export default routers;
