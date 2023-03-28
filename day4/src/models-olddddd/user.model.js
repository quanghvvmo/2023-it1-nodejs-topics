import { DataTypes } from "sequelize";

export default (sequelize) => {
    const User = sequelize.define(
        "User",
        {
            id: {
                type: DataTypes.STRING(36),
                allowNull: false,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING(32),
                allowNull: true,
                unique: true,
            },
            password: {
                type: DataTypes.STRING(250),
                allowNull: true,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            mail: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            phone: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            address: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            isActive: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            createBy: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updateBy: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            timestamps: true,
        }
    );

    return User;
};
