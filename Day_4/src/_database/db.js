const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const config = require('../config')
const { sequelize } = require('../config/database');
const { migrate } = require('../utils/migration');

class Db{
    constructor(){
        const models = {}
        fs
            .readdirSync(path.join(__dirname, 'models'), { withFileTypes: true })
            .filter(dir => dir.isDirectory()) // Use node version >= 10
            .map(dir => dir.name)
            .forEach(dir => {
                const model = require(path.join(__dirname, 'models', dir))
                model.init(sequelize);
                // models[model.name] = model;
                models[_.upperFirst(dir)] = model;
            });
        Object.values(models)
            .filter(model => typeof model.associate === 'function')
            .forEach(model => model.associate(models));
    }
    getSequelize() {
        return sequelize;
      }
      connect() {
        let connectPromise = sequelize
          .authenticate()
          .then(() => {
            console.log(`Connected to database: ${sequelize.config.database}`);
            return sequelize.sync({ force: config.db_recreate }).then(() => {
              if (config.db_run_migration) {
                migrate();
              }
              return sequelize;
            });
          })
          .catch(error => {
            throw error;
          });
        return connectPromise;
      }
}
module.exports = new Db();