const { DataTypes } = require('sequelize');

const attribute = {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
};

const options = { timestamps: false, tableName: 'Categories' }

const Category = (sequelize)=> {
  const Category = sequelize.define("Category", attribute, options);
  return Category;
};

module.exports = Category;