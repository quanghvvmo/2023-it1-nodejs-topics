import APIError from "../helper/apiError.js";
import httpStatus from "http-status";
import db from "../_database/index.js";

const addUser = async (payload) => {
    // Check if the username already exist
    const existingUser = await db
        .getModels()
        .User.findOne({ where: { username: payload.username } });
    if (existingUser) {
        throw new APIError({ message: "User already exist !", status: httpStatus.CONFLICT });
    }

    const newUser = await db.getModels().User.create({
        ...payload,
        isActive: true,
    });
    return newUser.id;
};

export { addUser };
