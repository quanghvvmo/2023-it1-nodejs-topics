const express = require('express');
const user = require('./user');

class ServicesIndex{
    constructor(app) {
        this.app = app;
        this.router = express.Router();
        this.app.use('/api/v1',this.router)
    }
    registerService(){
        this.router.use('/user',user)
    }
}
module.exports = (app) => {
    return new ServicesIndex(app).registerService();
}
