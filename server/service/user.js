const User = require('../persistance/models').user;
const UserRepository = require('../persistance/repository/user-repository');

exports.getAllUsers = ((req, res) => {
    User.findAll({
        include: [{all: true}]
    }).then((users) => {
        res.send(users);
    });
});

exports.insertUser = ((req, res) => {
    console.log(req.body);
    const repo = new UserRepository(req.body);
    const success = repo.insertUser();
    if (success) {
        res.status(200).send("it worked");
    } else {
        res.status(401).send("error");
    }
});