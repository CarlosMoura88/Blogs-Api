const authService = require('../services/authService');
const categoryService = require('../services/categoryService');
const { throwUnauthorizedError } = require('../services/utils');

const categoryController = {
  create: async (req, res) => {
    const { name } = req.body;
    const token = req.headers.authorization;
    if (!token) return throwUnauthorizedError('Token not found');
    await authService.readToken(token);
    await authService.validateCategoryBody(req.body);    
    const category = await categoryService.create(name);

    res.status(201).json(category);
  },
   getAll: async (req, res) => {    
    const token = req.headers.authorization;
    if (!token) return throwUnauthorizedError('Token not found');
    await authService.readToken(token);
    const categories = await categoryService.getAll();
    
    res.status(200).json(categories);
   },

};

module.exports = categoryController;