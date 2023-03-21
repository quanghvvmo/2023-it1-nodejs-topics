const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Customer = sequelize.define("Customer", {
        id: {
            type: DataTypes.STRING(36),
            allowNull: false,
            primaryKey: true,
        },
        paymentMethod: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        isActive: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        isDeleted: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });

    return Customer;
};
