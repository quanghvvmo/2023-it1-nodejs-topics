// const { DataTypes } = require("sequelize");

// module.exports = (sequelize) => {
//     const Product = sequelize.define(
//         "Product",
//         {
//             id: {
//                 type: DataTypes.STRING(36),
//                 allowNull: false,
//                 primaryKey: true,
//             },
//             name: {
//                 type: DataTypes.INTEGER,
//                 allowNull: true,
//             },
//             description: {
//                 type: DataTypes.STRING(4000),
//                 allowNull: true,
//             },
//             tax: {
//                 type: DataTypes.DOUBLE,
//                 allowNull: false,
//             },
//             discount: {
//                 type: DataTypes.DOUBLE,
//                 allowNull: false,
//             },
//             totalPrice: {
//                 type: DataTypes.DOUBLE,
//                 allowNull: false,
//             },
//             isDeleted: {
//                 type: DataTypes.INTEGER,
//                 allowNull: false,
//             },
//             createBy: {
//                 type: DataTypes.DATE,
//                 allowNull: false,
//             },
//             updateBy: {
//                 type: DataTypes.DATE,
//                 allowNull: false,
//             },
//             price: {
//                 type: DataTypes.DOUBLE,
//                 allowNull: false,
//             },
//         },
//         {
//             timestamps: "true",
//         }
//     );

//     return Product;
// };
