const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: { type: String, require: true },
        description: { type: String, require: true },
        price: { type: mongoose.Types.Decimal128 },
        tax: { type: mongoose.Types.Decimal128 },
        discount: { type: mongoose.Types.Decimal128 },
        totalPrice: { type: mongoose.Types.Decimal128 },
        isDeleted: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
