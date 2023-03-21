const express = require('express');
const app = express();

const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/user.routes")(app);

db.sequelize.sync().then((res) => {
    app.listen(8080, () => {
        console.log("Server runinng...");
    });
});

module.exports = app;
