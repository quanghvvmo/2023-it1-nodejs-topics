const BaseModel = require('../base');
const User = require('../user');

module.exports = class customer extends BaseModel {
    static tableName = 'customer';
    static modelName = 'customer';
    static schema = require('./schema')
    static include = [
        {
            model: User,
            as: 'user'
        }
    ]
    static associate(models){
        this.belongsTo(models.User,{foreignKey: 'customerId',targetKey:'id', as: 'User'});
    }
}