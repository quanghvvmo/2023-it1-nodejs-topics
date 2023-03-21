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
                    isActive: data.isActive === '1' ? true : false,
                    createBy: data.createBy,
                    createAt: data.createAt,
                    updateAt: data.updateAt,
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

module.exports = {
    createUser: createUser
}