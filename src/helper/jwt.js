const jsonwebtoken = require('jsonwebtoken');

function generateToken() {
    const token = jsonwebtoken.sign({}, 'testik');
    return token;
}

module.exports = { generateToken };