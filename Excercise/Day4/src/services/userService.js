import { v4 as uuidv4 } from "uuid";
import db from "../models/index"

let createUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let newId = uuidv4();
            let existUser = await db.User.findOne({
                where: {
                    username: data.username
                }
            })
            if (existUser) {
                resolve({
                    errCode: 1,
                    errMsg: 'Username is already exsiting'
                })
            } else {
                await db.User.create({
                    id: newId,
                    username: data.username,
                    password: data.password,
                    age: data.age,
                    email: data.email,
                    phone: data.phone,
                    address: data.address,
                    isActive: data.isActive,
                    createBy: data.createBy,
                    updateBy: data.updateBy
                })
                resolve({
                    errCode: 0,
                    errMsg: 'The new User has been created'
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

let getallUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                include: [
                    {
                        model: db.Customer
                    }
                ],
                raw: false,
                nest: true,
            });
            resolve({
                errCode: 0,
                errMsg: 'Success',
                users
            })
        } catch (error) {
            reject(error);
        }
    })
}
let getUserByid = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: userId
                }
            })
            if (user) {
                resolve({
                    errCode: 0,
                    errMsg: 'Ok',
                    user
                })
            } else resolve({
                errCode: -1,
                errMsg: 'Not found user'
            })
        } catch (error) {
            reject(error);
        }
    })
}
let activeUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: userId,
                },
                raw: false
            })
            if (user) {
                if (user.isActive === true) {
                    resolve({
                        errCode: 2,
                        errMsg: 'The user is already Actived',
                    })
                } else {
                    user.isActive = 1;
                    await user.save();
                    resolve({
                        errCode: 0,
                        errMsg: "Active successfully",
                        user
                    })
                }
            } else resolve({
                errCode: -1,
                errMsg: 'Not found user'
            })
        } catch (error) {
            reject(error);
        }
    })
}
let inactiveUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: userId,
                },
                raw: false
            })
            if (user) {
                if (user.isActive === false) {
                    resolve({
                        errCode: 2,
                        errMsg: 'The user is already Inactived',
                    })
                } else {
                    user.isActive = 0;
                    await user.save();
                    resolve({
                        errCode: 0,
                        errMsg: "Inactive successfully",
                        user
                    })
                }
            } else resolve({
                errCode: -1,
                errMsg: 'Not found user'
            })
        } catch (error) {
            reject(error);
        }
    })
}
let deleteUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: userId
                }
            })
            if (user) {
                await db.User.destroy({
                    where: { id: userId }
                });
                resolve({
                    errCode: 0,
                    errMsg: 'The user is deleted',
                })
            } else resolve({
                errCode: -1,
                errMsg: 'Not found user'
            })
        } catch (error) {
            reject(error);
        }
    })
}
let updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: data.id,
                },
                raw: false
            })
            if (user) {
                user.username = data.username,
                    user.password = data.password,
                    user.age = data.age,
                    user.email = data.email,
                    user.phone = data.phone,
                    user.address = data.address,
                    user.isActive = data.isActive,
                    user.createBy = data.createBy,
                    user.updateBy = data.updateBy
                await user.save();
                resolve({
                    errCode: 0,
                    errMsg: 'The user is updated',
                })
            } else resolve({
                errCode: -1,
                errMsg: 'Not found user'
            })
        } catch (error) {
            reject(error);
        }
    })
}
module.exports = {
    createUser: createUser,
    getallUser: getallUser,
    getUserByid: getUserByid,
    activeUser: activeUser,
    inactiveUser: inactiveUser,
    deleteUserById: deleteUserById,
    updateUser: updateUser
}