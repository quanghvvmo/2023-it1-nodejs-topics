const User = require('../user/userModel');
const generatePassword = require('../../utils/generatePassword');
const sendMail = require('../../utils/transportMail');
const Customer = require('./customer/customerModel');

async function getListUsers(req) {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    if (page <= 0 || limit <= 0) throw new Error("Parameters aren't accepted");

    const users = await User.find().select("username").limit(limit).skip((page - 1) * limit);
    return users;
}

async function login(req) {
    const {username, password} = req.body;
    const user = await User.findOne({ username });
    if (!user) throw new Error("User not exist");
    if (!user.isActive) throw new Error("Account not active");
    const isValid = await user.comparePassword(password);
    if(!isValid) throw new Error("Password not match");
    const token = user.generateJWT();
    return token;
}

async function createUser(req) {
    const { paymentMethod, ...user } = req.body;
    if(await User.findOne({ username: user.username })) {
        throw new Error("Username already exists");
    }
    const newCustomer = new Customer({
        paymentMethod: paymentMethod,
    });

    const password = generatePassword();

    const newUser = new User({
        ...user,
        password,
        createBy: new Date(),
        updateBy: new Date(),
        customer: newCustomer._id
    });

    sendMail(newUser.email ,password)

    await newCustomer.save();
    await newUser.save();

    return newUser._id;
}

async function updateUser(req) {
    const userId = req.params.id;
    const { paymentMethod, ...updatedUser } = req.body;
    const user = await User.findByIdAndUpdate(
        userId,
        { ...updateUser },
        { new: true }
    );
    if(!user) {
        throw new Error("User not exists");
    }
    const customerId = user.customer;
    const customer = await Customer.findByIdAndUpdate(customerId, { paymentMethod }, { new: true });
    if(!customer) {
        throw new Error("Customer not exists");
    }
    return user._id;
}

async function inactiveUser(req) {
    const userId = req.params.id;
    const user = await User.findByIdAndUpdate(userId, { isActive: false }, { new: true });
    if (!user) {
        throw new Error("User not found");
    }
    return user._id;
}

async function activeUser(req) {
    const userId = req.params.id;
    const user = await User.findByIdAndUpdate(userId, { isActive: true }, { new: true });
    if (!user) {
        throw new Error("User not found");
    }
    return user._id;
}

module.exports = {
    login,
    createUser,
    updateUser,
    activeUser,
    inactiveUser,
    getListUsers
}