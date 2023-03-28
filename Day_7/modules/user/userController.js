const User = require('./userModel');
const { login, createUser, updateUser, activeUser, inactiveUser, getListUsers } = require('./userService');
exports.createUserController = async (req, res) => {
    try {
        const user = await createUser(req);
        return res.status(200).json(user);
    } catch(err) {
        if (err.message) return res.status(400).json({ message: err.message });
        return res.status(500).json(err);
    }
}

exports.userLoginController = async function (req, res) {
    try {
        const token = await login(req);
        return res.status(200).json(token);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

exports.updateUserController = async function (req, res) {
    try {
        const user = await updateUser(req);
        return res.status(200).json(user);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

exports.inactiveUserController = async function (req, res) {
    try {
        const userId = await inactiveUser(req);
        return res.status(200).json(userId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

exports.activeUserController = async function (req, res) {
    try {
        const userId = await activeUser(req);
        return res.status(200).json(userId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};
exports.getListUsersController = async function (req, res) {
    try {
        const users = await getListUsers(req);
        return res.status(200).json(users);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};
