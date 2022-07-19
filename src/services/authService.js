require('dotenv').config();

const jwt = require('jsonwebtoken');
const Joi = require('joi');

const secret = process.env.JWT_SECRET;

const authService = {
  validateBodyLogin: async (body) => {
    const schema = Joi.object({
      email: Joi.string().email().required().max(255),
      password: Joi.string().required().max(255),
    }).messages({
      'string.empty': 'Some required fields are missing',
    });
    const result = schema.validateAsync(body);
  
    return result;
  },

  generateToken: (email) => {
    const token = jwt.sign({ data: email }, secret);
    return token;
  },

  readToken: (token) => {
    const { data } = jwt.decode(token, secret);
    return data;
  },
};

module.exports = authService;