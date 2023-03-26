const {
    createProduct,
    updateProduct,
    getProductsPagination,
    softDeleteProduct,
} = require("./product.service");

const createProductController = async function (req, res, next) {
    try {
        await createProduct(req);
        next();
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

const updateProductController = async function (req, res, next) {
    try {
        await updateProduct(req);
        next();
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

const getProductsController = async function (req, res) {
    try {
        const Products = await getProductsPagination(req);
        return res.status(200).json(Products);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

const deleteProductController = async function (req, res) {
    try {
        const ProductId = await softDeleteProduct(req);
        return res.status(200).json(ProductId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

module.exports = {
    createProductController,
    updateProductController,
    getProductsController,
    deleteProductController,
};
