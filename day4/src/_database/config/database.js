import Sequelize from "sequelize";
import config from "../../config/index.js";

const options = {
    database: config.db_database,
    username: config.db_username,
    password: config.db_password,
    host: config.db_host,
    port: config.db_port,
    dialect: config.db_dialect,
};

const sequelize = new Sequelize(options);

export default sequelize;
