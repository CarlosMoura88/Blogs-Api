const express = require('express');

const blogPostController = require('../controllers/blogPostController');

const router = express.Router();

// router.post('/', blogPostController);

router.get('/', blogPostController.getAll);

// router.get('/:id', blogPostController);

module.exports = router;
