const mongoose = require("mongoose");

const productImagesSchema = new mongoose.Schema(
    {
        name: { type: String, require: true },
        url: { type: String, require: true },
        isDeleted: { type: Boolean, default: false },
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    },
    {
        timestamps: true,
    }
);

const ProductImages = mongoose.model("ProductImages", productImagesSchema);

module.exports = ProductImages;
