const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/university');

const TableUser = mongoose.model('users', {
    name: String,
    surname: String,
    age: Number,
    email: String,
    password: String,
})

const ObjectId = mongoose.Types.ObjectId;

module.exports = { TableUser, ObjectId };