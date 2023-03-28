import fs from "fs";
import path from "path";
import * as Sequelize from "sequelize";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

import sequelize from "../config/database.js";

class Db {
    constructor() {
        // Init models
        const db = {};

        fs.readdirSync(path.join(__dirname, "models"))
            .filter((file) => {
                return (
                    file.indexOf(".") !== 0 &&
                    file.slice(-3) === ".js" &&
                    file.indexOf(".test.js") === -1
                );
            })
            .forEach((file) => {
                const model = import(path.join(__dirname, "models", file));
                console.log(model);
                // (sequelize, Sequelize.DataTypes);
                db[model.name] = model;
            });

        Object.keys(db).forEach((modelName) => {
            if (db[modelName].associate) {
                db[modelName].associate(db);
            }
        });
    }

    getSequelize() {
        return sequelize;
    }

    connect() {
        const connectPromise = sequelize.authenticate();
        return connectPromise;
    }
}

export default new Db();
