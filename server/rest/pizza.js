const express = require('express');
const router = express.Router();
const pizza = require('../service/').pizza;

router.post('/', pizza.getSomething);
// router.post('/login', pizza.login);
// router.post('/sync', pizza.authToken);
// router.post('/', pizza.insertUser);
// router.put('/:id', pizza.updateUser);
// router.delete('/:id', pizza.delete);

module.exports = router;