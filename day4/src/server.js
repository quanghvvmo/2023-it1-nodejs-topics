import express from "express";
import cors from "cors";
import morgan from "morgan";
const app = express();
// const services = require('./_services');
import getEnvironmentSetting from "./_utils/environment.js";
// import { stream as _stream, info, error as _error } from "./_utils/logger";
import config from "./config/index.js";

import db from "./_database/db.js";
// import { converter, notFound, handler } from "./middlewares/error";

// Configuring cors
app.use(cors());
// Configuring body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan(config.morgan_format));
app.get("/init", (req, res) => res.send("App is working"));

const initService = () => {
    const services = require("./_services");
    console.log("Init - Register services.");
    services(app);
    console.log(`Init - Register services '${services.name}' successfully.`);
    return;
};

const initSequelize = (db) => {
    console.log("Init - Establish connection.");

    return db
        .connect()
        .then(() => {
            console.log("Init - Establish connection successfully.");
        })
        .catch((err) => {
            console.err("Init - Establish connection fail:", err);
        });
};

const handleError = () => {
    // if error is not an instanceOf APIError, convert it.
    app.use(converter);

    // catch 404 and forward to error handler
    app.use(notFound);

    // error handler, send stacktrace only during development
    app.use(handler);

    return;
};

const startServer = async () => {
    app.listen(config.port, config.host);
    console.log(`Listening on host ${config.host} on port ${config.port} `);
};

getEnvironmentSetting()
    // .then(registerMiddleware.bind(this, app))
    // .then(initService.bind(this))
    // .then(handleError.bind(this))
    // .then(initSequelize(db))
    // .then(migrateSequelize.bind(this))
    .then(startServer.bind(this))
    .catch((error) => {
        console.error("Startup Error: ", error);
    });

export default app;
