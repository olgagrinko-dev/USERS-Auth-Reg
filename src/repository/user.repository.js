const { TableUser, ObjectId } = require('../db');

async function getAllUserDB() {
    const data = await TableUser.find();
    return data;
};

async function getByIdUserDB(_id) {
    const data = await TableUser.find({ _id: new ObjectId(_id) });
    return data;
};

async function createUserDB(user) {
    await TableUser.create(user);
    const data = await TableUser.find();
    return data;
};

async function updateUserDB(_id, user) {
    await TableUser.updateOne({ _id: new ObjectId(_id) }, { $set: user });
    const data = await TableUser.find();
    return data;
};

async function deleteUserDB(_id) {
    await TableUser.deleteOne({ _id: new ObjectId(_id) });
    const data = await TableUser.find();
    return data;
};

async function getByIdEmail(email) {
    const data = await TableUser.find({ email: email });
    return data;
}


module.exports = { getAllUserDB, getByIdUserDB, createUserDB, updateUserDB, deleteUserDB, getByIdEmail };