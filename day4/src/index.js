const express = require("express");
const app = express();

require("dotenv").config();
require("./models");
const routers = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routers);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
