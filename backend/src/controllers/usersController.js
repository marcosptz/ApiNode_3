require('dotenv').config();
const usersModel = require('../models/usersModel');

const selectUsers = async (req, res) => {
    const users = await usersModel.users();
    console.log('res -', res)
    return users;
}

const selectUser = async (id) => {
    const users = await usersModel.user(id);
    return users;
}

const insertUser = async (user) => {
    const res = await usersModel.insert(user);
    return res;
}

const updateUser = async (id, user) => {
    const res = await usersModel.edit(id, user);
    return res;
}

const deleteUser = async (id) => {
    const res = await usersModel.delet(id);
    return res;
}

module.exports = {
    selectUsers,
    selectUser,
    updateUser,
    insertUser,
    deleteUser,
};
