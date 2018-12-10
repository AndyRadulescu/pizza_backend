const User = require('../persistance/models').user;
const UserRepository = require('../persistance/repository/user-repository');

exports.getAllUsers = ((req, res) => {
    User.findAll().then((users) => {
        res.send(users);
    });
});

exports.insertUser = ((req, res) => {
    console.log(req.body);
    const repo = new UserRepository(req.body);
    repo.passwordHashing();
    res.status(200).send("it worked");
});