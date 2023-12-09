const usersRouter = require('express').Router();

const selectUsers = require('../controllers/usersController');

usersRouter.delete('/user/delete/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const results = await selectUsers.deleteUser(id);
    response.status(200).json(results);  // Delete usa status 204
});

usersRouter.patch('/user/edit/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const results = await selectUsers.updateUser(id, request.body);
    response.status(200).json(results);
});

usersRouter.post('/user/insert', async (request, response) => {
    const results = await selectUsers.insertUser(request.body);
    response.status(201).json(results);
});

usersRouter.get('/user/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const results = await selectUsers.selectUser(id);
    response.status(200).json(results);
});

usersRouter.get('/users', async (request, response) => {
    const results = await selectUsers.selectUsers();
    response.status(200).json(results);
});

module.exports = usersRouter;
