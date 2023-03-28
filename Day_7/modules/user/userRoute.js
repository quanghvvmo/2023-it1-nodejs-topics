const userRouter = require("express").Router();
const {
    createUserController,
    userLoginController, 
    updateUserController,
    activeUserController,
    inactiveUserController,
    getListUsersController
} = require("./userController");
const middleware = require("../../middleware/middleware");

userRouter.get("/api/v1/users", middleware, getListUsersController);
userRouter.post("/api/v1/users", createUserController);
userRouter.post("/api/v1/users/login", userLoginController);
userRouter.put("/api/v1/users/:id", middleware, updateUserController);
userRouter.patch("/api/v1/users/:id/active", middleware, activeUserController);
userRouter.patch("/api/v1/users/:id/inactive", middleware, inactiveUserController);

module.exports = userRouter;