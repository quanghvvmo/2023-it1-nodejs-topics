import { addUser } from "../services/user.service.js";

const addUserController = async function (req, res) {
    try {
        const createdUserId = await addUser(req);
        return res.status(201).json(createdUserId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

export { addUserController };
