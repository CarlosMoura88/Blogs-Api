const { validateUserBody, generateToken } = require('../services/authService');
const userService = require('../services/userService');
const authService = require('../services/authService');
const { 
  throwAlreadyExistsError, 
  throwUnauthorizedError, 
  throwNotExistError, 
} = require('../services/utils');

const userController = {
  create: async (req, res) => {
    const { email } = req.body;
    await validateUserBody(req.body);
    const created = await userService.create(req.body);
  
  if (created) {
  const token = await generateToken(email);  
  res.status(201).json({ token });
  }
  throwAlreadyExistsError('User already registered');
  },

  getAllUsers: async (req, res) => {
    const token = req.headers.authorization;
    if (!token) return throwUnauthorizedError('Token not found');
    await authService.readToken(token);
    const user = await userService.getAll();
    res.status(200).json(user);
  },
  getById: async (req, res) => {
    const token = req.headers.authorization;
    const { id } = req.params;
    if (!token) return throwUnauthorizedError('Token not found');
    await authService.readToken(token);
    const user = await userService.getById(id);
    if (!user) return throwNotExistError('User does not exist');

    res.status(200).json(user);
  },
};

module.exports = userController;