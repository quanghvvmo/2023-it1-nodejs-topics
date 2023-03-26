const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true },
        password: { type: String },
        age: { type: Number, required: true },
        isActive: { type: Boolean, default: true },
        phone: { type: String },
        address: { type: String },
        customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    },
    {
        timestamps: true,
    }
);

userSchema.methods.comparePassword = async function (candidatePassword) {
    const isPasswordValid = await bcrypt.compare(candidatePassword, this.password);
    return isPasswordValid;
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "2 days" });
};

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
