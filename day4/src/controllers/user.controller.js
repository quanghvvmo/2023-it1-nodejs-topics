const {
    addUser,
    updateUser,
    getListUsers,
    getUserDetail,
    activeUser,
    inactiveUser,
    deleteUser,
} = require("../services/user.service");

const addUserController = async function (req, res) {
    try {
        const createdUserId = await addUser(req.body);
        return res.status(200).json(createdUserId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

const updateUserController = async function (req, res) {
    try {
        const updatedUserId = await updateUser(req.body);
        return res.status(200).json(updatedUserId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

const getListUsersController = async function (req, res) {
    try {
        const updatedUserId = await getListUsers(req.body);
        return res.status(200).json(updatedUserId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

const activeUserController = async function (req, res) {
    try {
        const updatedUserId = await activeUser(req.params);
        return res.status(200).json(updatedUserId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

const inactiveUserController = async function (req, res) {
    try {
        const updatedUserId = await inactiveUser(req.params);
        return res.status(200).json(updatedUserId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

const getUserDetailController = async function (req, res) {
    try {
        const updatedUserId = await getUserDetail(req.params);
        return res.status(200).json(updatedUserId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

const deleteUserController = async function (req, res) {
    try {
        const updatedUserId = await deleteUser(req.params);
        return res.status(200).json(updatedUserId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

module.exports = {
    addUserController,
    updateUserController,
    getListUsersController,
    getUserDetailController,
    activeUserController,
    inactiveUserController,
    deleteUserController,
};
