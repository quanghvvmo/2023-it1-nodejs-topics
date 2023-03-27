import db from "../models/index";
import _ from "lodash";
import moment from "moment";


let createProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Product.create({
                id: data.id,
                name: data.name,
                description: data.description,
                price: data.price,
                tax: data.tax,
                discount: data.discount,
                totalPrice: data.totalPrice,
                isDeleted: data.isDeleted,
                createBy: data.createBy,
                updateBy: data.updateBy
            })
            resolve({
                errCode: 0,
                errMsg: "Creating product succesfull!"
            })
        } catch (error) {
            reject(error);
        }
    })
}

let getListProduct = (key) => {
    return new Promise(async (resolve, reject) => {
        try {
            let products = await db.Product.findAll({});
            if (key === 'DESC') {
                products = _.orderBy(products, ['name'], ['desc']);
            } else if (key === 'ASC') products = _.orderBy(products, ['name'], ['asc'])
            products.map((p) => {
                p.createdAt = moment(p.createdAt).format("YYYY-DD-MM HH:mm:ss");
                p.updatedAt = moment(p.updatedAt).format("YYYY-DD-MM HH:mm:ss");
                return p;
            })
            console.log(products);
            resolve({
                errCode: 0,
                errMsg: 'Success',
                products
            })
        } catch (error) {
            reject(error);
        }
    })
}
module.exports = {
    createProduct: createProduct,
    getListProduct: getListProduct
}