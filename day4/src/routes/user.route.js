const userRouter = require("express").Router();
const {
    addUserController,
    updateUserController,
    getListUsersController,
    getUserDetailController,
    activeUserController,
    inactiveUserController,
    deleteUserController,
} = require("../controllers/user.controller");

userRouter.get("/api/v1/users", getListUsersController);
userRouter.get("/api/v1/users/:id", getUserDetailController);

userRouter.post("/api/v1/users", addUserController);

userRouter.put("/api/v1/users", updateUserController);

userRouter.patch("/api/v1/users/:id/active", activeUserController);
userRouter.patch("/api/v1/users/:id/inactive", inactiveUserController);

userRouter.delete("/api/v1/users/:id", deleteUserController);

module.exports = userRouter;