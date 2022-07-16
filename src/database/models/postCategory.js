const { DataTypes } = require('sequelize');

const attribute = {
  postId: {
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    onUpdate: 'CASCADE', 
    onDelete: 'CASCADE',
    references: {
      model: 'BlogPosts',
      key: 'id',
    }
  },
  categoryId:{
    type: DataTypes.INTEGER, 
    primaryKey: true,
    onUpdate: 'CASCADE', 
    onDelete: 'CASCADE',
    references: {
      model: 'Categories',
      key: 'id',
    }
  }
};

const options = { timestamps: false, tableName: 'PostCategories' }

const PostCategory = (sequelize) => {
  const PostCategory = sequelize.define("PostCategory", attribute, options);

  PostCategory.associate = (model)=>{
    model.BlogPost.belongsToMany(model.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    model.Category.belongsToMany(model.BlogPost, {
      as: 'posts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',      
    });
  }

  return PostCategory;
};

module.exports = PostCategory;