const userRouter = require("express").Router();
const {
    getUsersController,
    createUserController,
    updateUserController,
    inactiveUserController,
    activeUserController,
    userLoginController,
} = require("./user.controller");
const authenMiddleware = require("../../middlewares/authen.middleware");

userRouter.get("/api/v1/users", authenMiddleware, getUsersController);

userRouter.post("/api/v1/users", createUserController);
userRouter.post("/api/v1/users/login", userLoginController);

userRouter.put("/api/v1/users/:id", authenMiddleware, updateUserController);

userRouter.patch("/api/v1/users/:id/active", authenMiddleware, activeUserController);
userRouter.patch("/api/v1/users/:id/inactive", authenMiddleware, inactiveUserController);

module.exports = userRouter;
