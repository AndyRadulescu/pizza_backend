const User = require('../models').user;
const bcrypt = require('bcrypt');

module.exports = class UserRepository {
    constructor(userInfo) {
        this.userInfo = userInfo;

    }

    /**
     * @private
     */
    _passwordHashing(plainTextPassword) {
        console.log('ceva')
        const saltRounds = 10;
        let salt = bcrypt.genSaltSync(saltRounds);
        return bcrypt.hashSync(plainTextPassword, salt);
    }

    async insertUser() {
        try {
            await User.create({
                uuid: this.userInfo.uuid,
                name: this.userInfo.name,
                email: this.userInfo.email,
                phone: this.userInfo.phone,
                password: this._passwordHashing(this.userInfo.password)
            });
            return {success: true};
        } catch (err) {
            console.log(err);
            return {success: false}
        }
    }
};