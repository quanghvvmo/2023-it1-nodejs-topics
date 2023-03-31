import fs from "fs";
import path from "path";
import * as Sequelize from "sequelize";
import sequelize from "./config/database.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

class Db {
    constructor() {
        // Init models
        this.db = {};

        fs.readdirSync(path.join(__dirname, "models"))
            .filter((file) => {
                return (
                    file.indexOf(".") !== 0 &&
                    file.slice(-3) === ".js" &&
                    file.indexOf(".test.js") === -1
                );
            })
            .forEach(async (file) => {
                const modelFunc = await import(path.join(__dirname, "models", file));

                const model = modelFunc.default(sequelize, Sequelize.DataTypes);

                this.db[model.name] = model;
            });

        Object.keys(this.db).forEach((modelName) => {
            if (this.db[modelName].associate) {
                this.db[modelName].associate(this.db);
            }
        });
    }

    connect() {
        return sequelize.authenticate();
    }

    getModels() {
        return this.db;
    }
}

export default new Db();
