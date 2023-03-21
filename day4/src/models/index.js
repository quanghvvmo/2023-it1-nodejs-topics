const Sequelize = require("sequelize");
const applyExtraSetup = require("./associates");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection database has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

// models
require("./user.model")(sequelize);
require("./customer.model")(sequelize);
require("./order.model")(sequelize);
require("./product.model")(sequelize);
require("./order-details.model")(sequelize);
require("./product-images.model")(sequelize);

// associates
applyExtraSetup(sequelize);

// sync
// sequelize.sync({ force: true }).then(() => {
//     console.log("Sync successfully.");
// });

module.exports = sequelize;
