module.exports = app => {
    const users = require('../controllers/user.controller');
    const router = require("express").Router();

    router.post('/api/v1/users', users.add);
    router.put('/api/v1/users/:id', users.update);
    router.get('/api/v1/users', users.getList);
    router.get('/api/v1/users/:id', users.getDetails);
    router.patch('/api/v1/users/:id/active', users.changeActiveUser);
    router.delete('/api/v1/users/:id', users.delete);

    app.use(router)
}