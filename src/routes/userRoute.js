require('dotenv').config();
const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.create);

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getById);

module.exports = router;
