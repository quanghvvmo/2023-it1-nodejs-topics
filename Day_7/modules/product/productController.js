const {
    createProduct,
    updateProduct,
    getListProducts,
    deleteProduct,
} = require("./productService");

exports.createProductController = async function (req, res, next) {
    try {
        await createProduct(req);
        next();
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

exports.updateProductController = async function (req, res, next) {
    try {
        await updateProduct(req);
        next();
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

exports.getListProductsController = async function (req, res) {
    try {
        const Products = await getListProducts(req);
        return res.status(200).json(Products);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

exports.deleteProductController = async function (req, res) {
    try {
        const ProductId = await deleteProduct(req);
        return res.status(200).json(ProductId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};
