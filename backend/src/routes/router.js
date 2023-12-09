const router = require('express').Router();

const selectUsers = require('../controllers/usersController');

// router.delete('/user/delete/:id', async (request, response) => {
//     const id = parseInt(request.params.id);
//     const results = await selectUsers.deleteUser(id);
//     response.status(200).json(results);  // Delete usa status 204
// });

// router.patch('/user/edit/:id', async (request, response) => {
//     const id = parseInt(request.params.id);
//     const results = await selectUsers.updateUser(id, request.body);
//     response.status(200).json(results);
// });

// router.post('/user/insert', async (request, response) => {
//     const results = await selectUsers.insertUser(request.body);
//     response.status(201).json(results);
// });

// router.get('/user/:id', async (request, response) => {
//     const id = parseInt(request.params.id);
//     const results = await selectUsers.selectUser(id);
//     response.status(200).json(results);
// });

// router.get('/clientes', async (request, response) => {
//     const results = {id: 1, nome: 'Marcos'}  //await selectUsers.selectUsers();
//     response.status(200).json(results);
// });

// router.get('/users', async (request, response) => {
//     const results = await selectUsers.selectUsers();
//     response.status(200).json(results);
// });

router.get('/', (request, response, next) => {
    response.send('Bem vindos!')
});

module.exports = router;