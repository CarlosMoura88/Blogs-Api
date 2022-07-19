require('dotenv').config();
const jwt = require('jsonwebtoken');
const express = require('express');
const model = require('../database/models');

const router = express.Router();

const secret = process.env.JWT_SECRET;

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
 return res
  .status(400)
  .json({ message: 'Some required fields are missing' }); 
}
  const user = await model.User.findOne({ where: { email } });
  if (!user) return res.status(400).json({ message: 'Invalid fields' });

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: email }, secret, jwtConfig);

  res.status(200).json({ token });
});

module.exports = router;