const User = require('../models').user;
const bcrypt = require('bcrypt');

module.exports = class UserRepository {
    constructor(userInfo) {
        this.userInfo = userInfo;

    }

    passwordHashing() {
        const saltRounds = 10;
        bcrypt.hash(this.userInfo.password, saltRounds, (err, hash) => {
            // Store hash in your password DB.
            this._insertUser(hash);
        });
    }

    /**
     * @private
     */
    _insertUser(hash) {
        User.create({
            uuid: this.userInfo.uuid,
            email: this.userInfo.email,
            phone: this.userInfo.phone,
            password: hash
        });
    }
};