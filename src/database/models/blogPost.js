const { DataTypes } = require('sequelize');

const attribute = {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  title: DataTypes.STRING, 
  content: DataTypes.STRING,  
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE', 
    onDelete: 'CASCADE',
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  published: DataTypes.DATE,
  updated: DataTypes.DATE,
};

const options = {timestamps: false, tableName: 'BlogPosts'}

const BlogPost = (sequelize) => {
  const BlogPost = sequelize.define("BlogPost", attribute, options);

  BlogPost.associate = (model)=>{
    BlogPost.belongsTo(model.User, {foreignKey: 'id', as: 'author'});
  };

  return BlogPost;
};

module.exports = BlogPost;