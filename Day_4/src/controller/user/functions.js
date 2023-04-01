const baseService = require('../base/functions')
const User = require('../../_database/models/user');
const Customer = require('../../_database/models/customer');
const httpStatus = require('http-status');
class UserService extends baseService {
    _model = User;
    _customer = Customer;
    _include = [
        {
            mode:Customer,
            as:'customer'
        }
    ]
}
module.exports = UserService;
