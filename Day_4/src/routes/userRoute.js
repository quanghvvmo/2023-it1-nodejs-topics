
const controller = require('../controller/userController');

const express = require("express")
const router = express.Router();
router.put('/api/v1/user/:username/active',controller.activeUser)
router.delete('/api/v1/user/:username',controller.deleteUser)
//router.put('/api/v1/user/:username/active',controller.inActiveUser)
module.exports = router;