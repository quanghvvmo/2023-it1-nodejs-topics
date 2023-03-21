import userService from "../services/userService"

let createUser = async (req, res) => {
    let result = await userService.createUser(req.body);
    if (result.errCode === 1) {
        return res.status(400).json(result.errMsg);
    } else if (result.errCode === 0) {
        return res.status(200).json(result);
    }
}

module.exports = {
    createUser: createUser
}