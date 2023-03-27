import productService from '../services/productService'

let createProduct = async (req, res) => {
    let result = await productService.createProduct(req.body);
    if (result.errCode === 1) {
        return res.status(400).json(result.errMsg);
    } else if (result.errCode === 0) {
        return res.status(200).json(result.errMsg);
    }
}

let getListProduct = async (req, res) => {
    let key = req.query.key;
    let result = await productService.getListProduct(key);
    if (result.errCode === 0) {
        return res.status(200).json(result.products);
    }
}
module.exports = {
    createProduct: createProduct,
    getListProduct: getListProduct
}