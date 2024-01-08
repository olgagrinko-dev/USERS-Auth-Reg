const { getAllUserDB, getByIdUserDB, createUserDB, updateUserDB, deleteUserDB, getByIdEmail } = require('../repository/user.repository');
const bcrypt = require('bcrypt');

const salt = 2;

async function getAllUser() {
    const data = await getAllUserDB();
    return data;
};

async function getByIdUser(_id) {
    const data = await getByIdUserDB(_id);
    return data;
};

async function createUser(user) {
    const found = await getByIdEmail(user.email);
    if (found.length) throw new Error('error, already exists ');
    const hashPassword = await bcrypt.hash(user.password, salt);
    const data = await createUserDB({ ...user, password: hashPassword });
    return data;
};

async function updateUser(_id, user) {
    const data = await updateUserDB(_id, user);
    return data;
};

async function deleteUser(_id) {
    const data = await deleteUserDB(_id);
    return data;
};

async function getAuth(user) {
    const found = await getByIdEmail(user.email);
    if (!found.length) throw new Error('error, email not found');
    if (await bcrypt.compare(found[0].password, user.password)) throw new Error('error, invalid password');
    return found;
};

module.exports = { getAllUser, getByIdUser, createUser, updateUser, deleteUser, getAuth };