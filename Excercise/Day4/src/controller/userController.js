import userService from "../services/userService"


//Sequelize
let createUser = async (req, res) => {
    let result = await userService.createUser(req.body);
    if (result.errCode === 1) {
        return res.status(400).json(result.errMsg);
    } else if (result.errCode === 0) {
        return res.status(200).json(result.errMsg);
    }
}

let getallUser = async (req, res) => {
    let result = await userService.getallUser();
    if (result.errCode === 0) {
        return res.status(200).json(result.users);
    }
}
let getUserbyId = async (req, res) => {
    let userId = req.params.id;
    if (!userId) {
        return res.status(400).json({
            errMsg: 'Missing required parameters',
            user: []
        })
    }
    let result = await userService.getUserByid(userId);
    if (result.errCode === -1) {
        return res.status(404).json(result);
    } else return res.status(200).json(result)
}
let activeUser = async (req, res) => {
    if (!req.params || req.params.id === "") {
        return res.status(400).json({
            errMsg: 'Missing required parameters',
            users: []
        })
    }
    let result = await userService.activeUser(id);
    if (result.errCode === -1) {
        return res.status(404).json(result);
    } else if (result.errCode === 2) {
        return res.status(201).json(result);
    } else return res.status(200).json(result)
}
let inactiveUser = async (req, res) => {
    if (!req.params.id && req.params.id === "") {
        return res.status(400).json({
            errMsg: 'Missing required parameters',
            users: []
        })
    }
    let result = await userService.inactiveUser(id);
    if (result.errCode === -1) {
        return res.status(404).json(result);
    } else if (result.errCode === 2) {
        return res.status(201).json(result);
    } else return res.status(200).json(result)
}
let deleteUser = async (req, res) => {
    if (!req.params.id && req.params.id === "") {
        return res.status(400).json({
            errCode: 1,
            errMessage: "Missing required id!",
        });
    }
    let result = await userService.deleteUserById(req.params.id);
    if (result.errCode === -1) {
        return res.status(404).json(result)
    } else return res.status(200).json(result);
};
let updateUser = async (req, res) => {
    let data = req.body;
    let result = await userService.updateUser(data);
    if (result.errCode === -1) {
        return res.status(404).json(result);
    } else return res.status(200).json(result)
};

//Mongo
let getAllUserMongo = async (req, res) => {
    let page = req.query.page;
    let result = await userService.getAllUserMongo(page);
    if (result.errCode === 0) {
        return res.status(200).json(result);
    }
}

let createUserMongo = async (req, res) => {
    let result = await userService.createUserMongo(req.body);
    if (result.errCode === 1) {
        return res.status(400).json(result.errMsg);
    } else if (result.errCode === 0) {
        return res.status(200).json(result.errMsg);
    }
}

let updateUserMongo = async (req, res) => {
    let data = req.body;
    let result = await userService.updateUserMongo(data);
    if (result.errCode === -1) {
        return res.status(404).json(result);
    } else return res.status(200).json(result)
}


module.exports = {
    createUser: createUser,
    getallUser: getallUser,
    getUserbyId: getUserbyId,
    activeUser: activeUser,
    inactiveUser: inactiveUser,
    deleteUser: deleteUser,
    updateUser: updateUser,


    getAllUserMongo: getAllUserMongo,
    createUserMongo: createUserMongo,
    updateUserMongo: updateUserMongo
}