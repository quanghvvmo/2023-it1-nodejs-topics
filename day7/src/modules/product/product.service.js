const Product = require("./product.model");
const ProductImages = require("./product-images/product-images.model");

async function createProduct(req) {
    const { name, description, price, tax, discount, totalPrice } = req.body;

    const newProduct = new Product({ name, description, price, tax, discount, totalPrice });
    await newProduct.save();

    const newProductImage = new ProductImages({
        name,
        url: req.file ? `${process.env.FILE_STORAGE_DESTINATION}/${Product._id}.png` : undefined,
        product: newProduct._id,
    });

    await newProductImage.save();

    req.productId = newProduct._id;
}

async function updateProduct(req) {
    const productId = req.params.id;
    const { name, description, price, tax, discount, totalPrice } = req.body;

    const product = await product.findByIdAndUpdate(
        productId,
        { name, description, price, tax, discount, totalPrice },
        { new: true }
    );

    if (!product) {
        throw new Error("Product not found");
    }
}

async function getProductsPagination(req) {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    if (page <= 0 || limit <= 0) throw new Error("Parameters aren't accepted");

    const products = await Product.find()
        .limit(limit)
        .skip((page - 1) * limit);

    return products;
}

async function softDeleteProduct(req) {
    const productId = req.params.id;
    const Product = await Product.findByIdAndUpdate(productId, { idDeleted: true }, { new: true });

    if (!Product) {
        throw new Error("Product not found");
    }

    return product._id;
}

module.exports = { createProduct, updateProduct, getProductsPagination, softDeleteProduct };
