const model = require('../database/models');

const categoryService = {
  create: async (name) => {
    await model.Category.create({ name });
    const category = model.Category.findOne({ where: { name } });
    return category;
  },
};

module.exports = categoryService;