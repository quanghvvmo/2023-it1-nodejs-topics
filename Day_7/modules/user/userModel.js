const mongoose = require('mongoose');
const uuid = require('uuid');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
        default: uuid.v4
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    createBy: {
        type: Date,
        required: true
    },
    createAt: {
        type: Date,
        required: true
    },
    updateAt: {
        type: Date,
        required: true
    },
    updateBy: {
        type: Date,
        required: true
    },
    customer: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Customer" 
    },
});

userSchema.methods.comparePassword = async function(inputPassword) {
    const check = await bcrypt.compare(inputPassword, this.password);
    return check;
}

userSchema.methods.generateJWT = function() {
    return jwt.sign({ _id: this.userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3 days'});
}

userSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;