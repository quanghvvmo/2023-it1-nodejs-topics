const express = require('express');
const app = express();

const config = require('./config');


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
initSequelize()
const startServer = async () => {
    app.listen(config.port, config.host);
    console.log(`Listening on host ${config.host} on port ${config.port} http://${config.host}:${config.port}`);
};
startServer();

module.exports = app;