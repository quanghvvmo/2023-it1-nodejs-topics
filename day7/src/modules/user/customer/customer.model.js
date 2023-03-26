const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    paymentMethod: { type: Number },
    isActive: { type: Boolean, default: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
