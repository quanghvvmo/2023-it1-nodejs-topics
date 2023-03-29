const dotenv = require('dotenv');
// Load environment constiables from .env file
dotenv.config();
const env = process.env.NODE_ENV;

const configs = {
    base: {
        env,
        // Application
        name: process.env.APP_NAME || 'SIMPLE_APP_NAME',
        host: process.env.HTTP_HOST || 'localhost',
        port: process.env.HTTP_PORT || 3000,
        // Database
        db_host: process.env.DB_HOST || 'localhost',
        db_port: process.env.DB_PORT || 3306,
        db_dialect: process.env.DB_DIALECT || 'mysql',
        db_username: process.env.DB_USERNAME || 'root',
        db_password: process.env.DB_PASSWORD || '',
        db_database: process.env.DB_DATABASE || 'sequelize',
        db_recreate: process.env.DB_RECREATE == 'true', // False as default
        db_run_migration: process.env.DB_RUN_MIGRATION != 'false', // True as default
        
        
    },
    localhost: {
        query_default_page_size:  30,
        query_default_page_index:  1,
        query_max_page_size:  400,
        log_level:  'debug',
        db_logging: process.env.DB_LOGGING != 'false', // True as default
    },
}
const config = Object.assign(configs.base, configs[env]);

module.exports = config;