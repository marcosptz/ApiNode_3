const connection = require('../db/conn');
const conn = connection.conn;

async function users() {
    const results = await conn.query('SELECT * FROM user')
    return results[0];
}

async function user(id) {    
    try {
        const values = [id];
        const results = await conn.query('SELECT * FROM user WHERE id =?', values)
        return {msg: `Success!`, response: true, results: results[0], error: false}
    } catch (error) {
        return {msg: 'Erro ao salvar o usuário!', response: false, error: error}
    }
}

async function insert(user) {
    try {
        const values = [user.name, user.email, 1, 1];
        await conn.query('INSERT INTO user(name, email, status, permissao) VALUES (?, ?, ?, ?)', values);
        return {msg: `Usuário ${user.name} salvo com sucesso!`, response: true, error: false}
    } catch (error) {
        return {msg: 'Erro ao salvar o usuário!', response: false, error: error}
    }
}

async function edit(id, user) {
    try {
        const values = [user.name, user.email, 1, 1, id];
        await conn.query('UPDATE user SET name=?, email=?, status=?, permissao=? WHERE id=?', values);
        return {msg: `Usuário ${user.name} editado com sucesso!`, response: true, error: false}
    } catch (error) {
        return {msg: 'Erro ao editar o usuário!', response: false, error: error}
    }
}

async function delet(id) {
    try {
        const values = [id];
        await conn.query('DELETE FROM user WHERE id=?', values);
        return {msg: `Usuário excluído com sucesso!`, response: true, error: false}
    } catch (error) {
        return {msg: 'Erro ao excluir o usuário!', response: false, error: error}
    }
}

module.exports = {
    users,
    user,
    edit,
    insert,
    delet,
};