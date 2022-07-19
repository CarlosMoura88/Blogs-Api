const model = require('../database/models');

const userService = {
  getByEmail: async (email) => {
    const user = await model.User.findOne({ where: { email } });
    return user;
  },

  create: async (object) => {
    const [, created] = await model.User
    .findOrCreate({ where: { email: object.email },
    default: {
      ...object,
    } });
    return created;
  },

  getAll: async () => {
    const user = await model.User.findAll({ 
      attributes: { 
        exclude: ['password'], 
      }, 
    });
    return user;
  },
  getById: async (id) => {
    const user = await model.User
    .findOne({ where: { id }, attributes: { exclude: ['password'] } });    
    return user;
  },
};

module.exports = userService;