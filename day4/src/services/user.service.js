const { v4: uuidv4 } = require("uuid");
const { User, Customer } = require("../models/index").models;

async function addUser({ username, password, age, mail, phone, address }) {
    // Check if the username already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
        throw new Error("Username already exists");
    }

    const id = uuidv4();

    const newUser = await User.create({
        id,
        username,
        password,
        age,
        mail,
        phone,
        address,
        isActive: true,
        createBy: new Date(),
        updateBy: new Date(),
    });

    return newUser.id;
}

async function updateUser({ username, password, age, mail, phone, address }) {
    const user = await User.findOne({ where: { username } });
    if (!user) {
        throw new Error("User not found");
    }

    const updatedUser = await user.update({ username, password, age, mail, phone, address });

    return updatedUser.id;
}

async function getListUsers() {
    const users = await User.findAll();

    const listUsers = users.map((user) => user.username);

    return listUsers;
}

async function getUserDetail({ id }) {
    const user = await User.findOne({
        include: [Customer],
        where: { id },
        attributes: { exclude: ["password"] },
    });

    return user;
}

async function activeUser({ id }) {
    const user = await User.findOne({ where: { id } });

    user.isActive = true;
    await user.save();

    return user.id;
}

async function inactiveUser({ id }) {
    const user = await User.findOne({ where: { id } });

    user.isActive = false;
    await user.save();

    return user.id;
}

async function deleteUser({ id }) {
    await User.destroy({
        where: {
            id,
        },
    });

    return id;
}

module.exports = {
    addUser,
    updateUser,
    getListUsers,
    getUserDetail,
    activeUser,
    inactiveUser,
    deleteUser,
};
