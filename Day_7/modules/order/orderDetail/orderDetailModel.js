const mongoose = require("mongoose");

const orderDetailSchema = new mongoose.Schema(
    {
        price: { 
            type: mongoose.Types.Decimal128, 
            require: true 
        },
        tax: { 
            type: mongoose.Types.Decimal128, 
            require: true 
        },
        discount: { 
            type: mongoose.Types.Decimal128, 
            require: true 
        },
        totalPrice: { 
            type: mongoose.Types.Decimal128, 
            require: true 
        },
        isDeleted: { 
            type: Boolean, 
            default: false 
        },
        order: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Order" 
        },
        product: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Product" 
        },
    },
    {
        timestamps: true,
    }
);

const OrderDetail = mongoose.model("OrderDetail", orderDetailSchema);

module.exports = OrderDetail;