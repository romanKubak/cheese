'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Comment.init({
    text: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
