"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
    class Customer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.User, { foreignKey: "UserId" });
        }
    }
    Customer.init(
        {
            paymentMethod: DataTypes.INTEGER,
            isActive: DataTypes.INTEGER,
            isDeleted: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Customer",
        }
    );
    return Customer;
};
