const express = require('express');
const router = express.Router();
const user = require('../service/').user;

router.get('/', user.getAllUsers);
router.post('/', user.insertUser);

module.exports = router;