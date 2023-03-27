import mongoose from "mongoose";
import db from "../../config/connectMongo"

db();

const User = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    age: Number,
    email: String,
    phone: String,
    address: String,
    isActive: { type: Boolean, required: true },
    createBy: Date,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    updateBy: Date,
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    }
}, {
    collection: 'user'
});

const Customer = new mongoose.Schema({
    userid: { type: mongoose.Types.ObjectId, required: true },
    paymentMethod: Number,
    isActive: { type: Boolean, required: true },
})

const UserModel = mongoose.model('user', User)
const CustomerModel = mongoose.model('customer', Customer)


module.exports = { UserModel, CustomerModel } 