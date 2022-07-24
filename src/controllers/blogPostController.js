const blogPostService = require('../services/blogPostService');
const authService = require('../services/authService');
const { throwUnauthorizedError } = require('../services/utils');

const postController = {
  getAll: async (req, res) => {
    const token = req.headers.authorization;
    if (!token) return throwUnauthorizedError('Token not found');
    await authService.readToken(token);    
    const posts = await blogPostService.getAll();    
    res.status(200).json(posts);
  },
};

module.exports = postController;