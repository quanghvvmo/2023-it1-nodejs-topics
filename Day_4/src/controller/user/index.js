const BaseRouter = require('../base')
const UserService = require('./functions')

class UserRouter extends BaseRouter {
    constructor(){
        const service = new UserService();
        //call the constructor of parent class using super constructor
        super(service);
        
    }
}
module.exports = new UserRouter();