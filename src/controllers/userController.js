const { validateUserBody, generateToken } = require('../services/authService');
const userService = require('../services/userService');
const { throwAlreadyExistsError } = require('../services/utils');

const userController = {
  create: async (req, res) => {
    const { email } = req.body;
    await validateUserBody(req.body);
    const created = await userService.create(req.body);
  
  if (created) {
  const token = generateToken(email);
  res.status(201).json({ token });
  }

  throwAlreadyExistsError('User already registered');
  },
};

module.exports = userController;