const userService = require('../services/userService');
const { validateBodyLogin, generateToken } = require('../services/authService');
const { throwInvalidFields } = require('../services/utils');

const loginController = async (req, res) => {
  const { email } = req.body;
  await validateBodyLogin(req.body);  
  
  const user = await userService.getByEmail(email);
  
  if (!user) return throwInvalidFields(); 

  const token = await generateToken(email);

  res.status(200).json({ token });
};

module.exports = loginController;