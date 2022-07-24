const model = require('../database/models');

const blogPostService = {
  getAll: async () => {
    const posts = await model.BlogPost.findAll({      
      include: [{
        model: model.User, 
        as: 'user',
        attributes: { exclude: ['password'] },
      },
    {
      model: model.Category,
      as: 'categories',      
    }],
    });    
    return posts;
  },

};

module.exports = blogPostService;