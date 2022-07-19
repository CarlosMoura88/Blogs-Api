require('dotenv').config();
const express = require('express');
const categoryController = require('../controllers/categoryController');
// const categoryController = require('../controllers/categoryController');

const router = express.Router();

// categoryController.create

router.post('/', categoryController.create);

module.exports = router;