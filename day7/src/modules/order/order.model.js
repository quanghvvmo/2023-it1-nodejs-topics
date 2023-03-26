const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        price: { type: mongoose.Types.Decimal128, require: true },
        tax: { type: mongoose.Types.Decimal128, require: true },
        discount: { type: mongoose.Types.Decimal128, require: true },
        totalPrice: { type: mongoose.Types.Decimal128, require: true },
        isDeleted: { type: Boolean, default: false },
        customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
