require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());

const router = require('./routes/router');
const usersRouter = require('./routes/usersRouter');

app.use(router);
app.use(usersRouter);
// app.use('/users', router);
// app.use('/user/:id', router);
// app.use('/user/insert', router);
// app.use('/user/edit/:id', router);
// app.use('/user/delete/:id', router);
// app.use('/clientes', router);

app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`)
});
