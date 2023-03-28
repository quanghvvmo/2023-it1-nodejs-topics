// const { DataTypes } = require("sequelize");

// module.exports = (sequelize) => {
//     const Order = sequelize.define(
//         "Order",
//         {
//             id: {
//                 type: DataTypes.STRING(36),
//                 allowNull: false,
//                 primaryKey: true,
//             },
//             price: {
//                 type: DataTypes.DOUBLE,
//                 allowNull: true,
//             },
//             tax: {
//                 type: DataTypes.DOUBLE,
//                 allowNull: true,
//             },
//             discount: {
//                 type: DataTypes.DOUBLE,
//                 allowNull: true,
//             },
//             totalPrice: {
//                 type: DataTypes.DOUBLE,
//                 allowNull: true,
//             },
//             isDeleted: {
//                 type: DataTypes.INTEGER,
//                 allowNull: true,
//             },
//             createBy: {
//                 type: DataTypes.DATE,
//                 allowNull: false,
//             },
//             updateBy: {
//                 type: DataTypes.DATE,
//                 allowNull: false,
//             },
//         },
//         {
//             timestamps: true,
//         }
//     );

//     return Order;
// };
