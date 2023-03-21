module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        createBy: {
            type: Sequelize.DATE,
            allowNull: false
        },
        createAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updateAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updateBy: {
            type: Sequelize.DATE,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'users'
    });
    return User;
};