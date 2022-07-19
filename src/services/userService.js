const model = require('../database/models');

const userService = {
  getByEmail: async (email) => {
    const user = await model.User.findOne({ where: { email } });
    return user;
  },

};

module.exports = userService;