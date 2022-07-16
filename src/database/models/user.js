const { DataTypes } = require('sequelize');

const attribute = {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  displayName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  image: DataTypes.STRING,
};

const options = { timestamps: false, tableName: 'Users' }

const User = (sequelize) => {
  const User = sequelize.define("User", attribute, options);

  User.associate = (model) => {
    User.hasMany(model.BlogPost, {foreignKey: 'userId', as: 'posts'});
  };
  return User;
};

module.exports = User;