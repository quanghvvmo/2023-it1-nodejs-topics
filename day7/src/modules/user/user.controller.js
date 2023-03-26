const {
    getUsersPagination,
    createUser,
    updateUser,
    inactiveUser,
    activeUser,
    login,
} = require("./user.service");

const userLoginController = async function (req, res) {
    try {
        const token = await login(req);
        return res.status(200).json({ token });
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

const getUsersController = async function (req, res) {
    try {
        const users = await getUsersPagination(req);
        return res.status(200).json(users);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

const createUserController = async function (req, res) {
    try {
        const userId = await createUser(req);
        return res.status(200).json(userId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

const updateUserController = async function (req, res) {
    try {
        const userId = await updateUser(req);
        return res.status(200).json(userId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

const inactiveUserController = async function (req, res) {
    try {
        const userId = await inactiveUser(req);
        return res.status(200).json(userId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

const activeUserController = async function (req, res) {
    try {
        const userId = await activeUser(req);
        return res.status(200).json(userId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

module.exports = {
    getUsersController,
    createUserController,
    updateUserController,
    inactiveUserController,
    activeUserController,
    userLoginController,
};
