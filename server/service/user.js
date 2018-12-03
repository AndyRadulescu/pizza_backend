const User = require('../models').user;

exports.getAllUsers = ((req, res) => {
    User.findAll().then((users) => {
        res.send(users);
    });
});