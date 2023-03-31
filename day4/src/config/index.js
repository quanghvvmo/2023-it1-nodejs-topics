import { config as _config } from "dotenv";

// Load environment constiables from .env file
_config();
const env = process.env.NODE_ENV || "development";

const configs = {
    base: {
        env,
        // Application
        name: process.env.APP_NAME || "SIMPLE_APP_NAME",
        host: process.env.HTTP_HOST || "localhost",
        port: process.env.HTTP_PORT || 8080,

        // Database
        db_host: process.env.DB_HOST || "localhost",
        db_port: process.env.DB_PORT || 3306,
        db_dialect: process.env.DB_DIALECT || "mysql",
        db_username: process.env.DB_USERNAME || "root",
        db_password: process.env.DB_PASSWORD,
        db_database: process.env.DB_DATABASE,

        // Security
        token_secret: process.env.TOKEN_SECRET || "ITSASECRET",
        token_expiry: process.env.TOKEN_EXPIRY || 60 * 60 * 24 * 3, // Expiry day for 3 days.
    },
    development: {
        morgan_format:
            process.env.MORGAN_LOG_FORMAT ||
            ":method :url :status :response-time ms - :res[content-length]",
    },
    localhost: {
        morgan_format:
            process.env.MORGAN_LOG_FORMAT ||
            ":method :url :status :response-time ms - :res[content-length]",
    },
};
const config = Object.assign(configs.base, configs[env]);

export default config;
