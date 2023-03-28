"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            age: DataTypes.INTEGER,
            mail: DataTypes.STRING,
            phone: DataTypes.STRING,
            address: DataTypes.STRING,
            isActive: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    return User;
};
