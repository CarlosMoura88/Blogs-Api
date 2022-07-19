/* const Joi = require('joi');

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
};

module.exports = authService; */