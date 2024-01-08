const express = require('express');
const { getAllUser, getByIdUser, createUser, upUser, deleteUser, getAuth } = require('../service/user.service');
const { generateToken } = require('../helper/jwt');
const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllUser();
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
});

route.get('/:_id', async (req, res) => {
    try {
        const data = await getByIdUser(req.params._id);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
});

route.post('/', async (req, res) => {
    try {
        const data = await createUser(req.body);
        const token = generateToken(data[data.length - 1]);
        res.cookie('Bearer', token);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

route.post('/auth', async (req, res) => {
    try {
        const data = await getAuth(req.body);
        const token = generateToken(data[0]);
        res.cookie('Bearer', token);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

route.put('/:_id', async (req, res) => {
    try {
        const data = await upUser(req.params._id, req.body);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

route.delete('/:_id', async (req, res) => {
    try {
        const data = await deleteUser(req.params._id);
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
});

module.exports = route;

