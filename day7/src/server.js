const express = require("express");
const app = express();

require("dotenv").config();
require("./configs/db.config");
const routers = require("./modules/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routers);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;
