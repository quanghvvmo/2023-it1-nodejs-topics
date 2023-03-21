const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const ProductImages = sequelize.define(
        "ProductImages",
        {
            id: {
                type: DataTypes.STRING(36),
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.INTEGER,
                defaultValue: null,
            },
            url: {
                type: DataTypes.INTEGER,
                defaultValue: null,
            },
            isDeleted: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
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
            timestamps: "true",
        }
    );

    return ProductImages;
};
