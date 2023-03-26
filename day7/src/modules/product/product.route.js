const productRouter = require("express").Router();
const authenMiddleware = require("../../middlewares/authen.middleware");
const upload = require("../../configs/upload.config");
const {
    createProductController,
    updateProductController,
    getProductsController,
    deleteProductController,
} = require("./product.controller");

productRouter.get("/api/v1/products", authenMiddleware, getProductsController);

productRouter.post(
    "/api/v1/products",
    authenMiddleware,
    createProductController,
    upload.single("file"),
    (req, res) => res.status(200).json({ message: "Created successfully" })
);

productRouter.put(
    "/api/v1/products/:id",
    authenMiddleware,
    updateProductController,
    upload.single("file"),
    (req, res) => res.status(200).json({ message: "Updated successfully" })
);

productRouter.delete("/api/v1/products/:id", authenMiddleware, deleteProductController);

module.exports = productRouter;
