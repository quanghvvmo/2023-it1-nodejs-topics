const productRouter = require("express").Router();
const middleware = require("../../middleware/middleware");
const upload = require("../../configs/uploadFile");
const {
    createProductController,
    updateProductController,
    getListProductsController,
    deleteProductController,
} = require("./productController");

productRouter.get("/api/v1/products", middleware, getListProductsController);

productRouter.post("/api/v1/products", middleware, createProductController,
    upload.single("file"),
    function (req, res, next) {
        res.status(200).json({ message: "Created successfully" });
    }
);

productRouter.put("/api/v1/products/:id", middleware, updateProductController,
    upload.single("file"),
    function (req, res, next) {
        res.status(200).json({ message: "Updated successfully" });
    }
);

productRouter.delete("/api/v1/products/:id", middleware, deleteProductController);

module.exports = productRouter;
