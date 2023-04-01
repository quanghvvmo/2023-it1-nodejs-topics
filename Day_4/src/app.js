const express = require('express');
const app = express();
const config = require('./config');
const userRoutes = require("./routes/userRoute.js")
app.get('/', (req, res) => res.send('App is working'));
const initSequelize = () => {
    const db = require('./_database/db');

    console.log('Init - Establish connection.');

    return db
        .connect()
        .then(() => {
            console.log('Init - Establish connection successfully.');
            return true;
        })
        .catch(err => {
             console.log('Init - Establish connection fail:', err);
            return false;
        });
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/users',userRoutes)
const initService = () => {
    const services = require('./controller');
    console.log('Init - Register services.');
    services(app);
    console.log(`Init - Register services '${services.name}' successfully.`);
    return;
};
const startServer = async () => {
    app.listen(config.port, config.host);
    initSequelize();
    initService();
    console.log(`Listening on host ${config.host} on port ${config.port} http://${config.host}:${config.port}`);
};
startServer();

module.exports = app;