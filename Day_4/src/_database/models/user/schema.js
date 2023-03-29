const Sequelize = require('sequelize');

module.exports = {
    id:{
        type:Sequelize.STRING(36),
        allowNull:false,
        primaryKey:true,
        defaultValue: Sequelize.UUIDV1
    },
    username:{
        type:Sequelize.STRING(32),
        allowNull:false
    },
    password:{
        type:Sequelize.STRING(250),
        allowNull:false
    },
    age:{
        type:Sequelize.INTEGER(2),
        allowNull:true
    },
    email:{
        type:Sequelize.STRING(100),
        allowNull:true
    },
    phone:{
        type:Sequelize.STRING(100),
        allowNull:true
    },
    address:{
        type:Sequelize.STRING(500)
    },
    isActive:{
        type:Sequelize.INTEGER(1)
    }
}