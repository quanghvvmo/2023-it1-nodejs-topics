const { v4: uuidv4 } = require("uuid");
const User = require("./user.model");
const Customer = require("./customer/customer.model");
const mailSender = require("../../utils/mail-sender");

async function getUsersPagination(req) {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    if (page <= 0 || limit <= 0) throw new Error("Parameters aren't accepted");

    const users = await User.find()
        .select("username")
        .limit(limit)
        .skip((page - 1) * limit);

    return users;
}

async function createUser(req) {
    const { username, email, age, phone, address, paymentMethod } = req.body;

    const user = await User.findOne({ username });
    if (user) throw new Error("User already exist !");

    const newCustomer = new Customer({
        paymentMethod,
    });

    const password = uuidv4();
    const newUser = new User({
        username,
        email,
        age,
        password,
        phone,
        address,
        customer: newCustomer._id,
    });
    newCustomer.user = newUser._id;

    await newCustomer.save();
    await newUser.save();

    await mailSender(email, "Account created successfully !", `<h1> Your password is ${password}`);

    return newUser._id;
}

async function updateUser(req) {
    const userId = req.params.id;
    const { age, phone, address, paymentMethod, password } = req.body;

    const user = await User.findByIdAndUpdate(
        userId,
        { age, phone, address, password },
        { new: true }
    );

    if (!user) {
        throw new Error("User not found");
    }

    const customerId = user.customer;
    const customer = await Customer.findByIdAndUpdate(customerId, { paymentMethod }, { new: true });

    if (!customer) {
        throw new Error("Customer not found");
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

async function login(req) {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) throw new Error("User doesn't exist !");
    if (!user.isActive) throw new Error("Account is inactive !");

    const isLoginValid = await user.comparePassword(password);
    if (!isLoginValid) throw new Error("Password is invalid");

    const token = user.generateJwt();
    return token;
}

module.exports = { getUsersPagination, createUser, updateUser, inactiveUser, activeUser, login };
