const express = require('express');

require('dotenv').config();
require('./configs/database');

const port = process.env.PORT || 3000;
const app = express();

const routers = require("./modules/routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routers);

app.listen(port, () => {
    console.log(`Server's running on port ${port}`);
})


