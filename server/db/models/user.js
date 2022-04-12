'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Token, Product, Basket, Order}) {
      this.hasMany(Token, {foreignKey: "user_id"});
      this.hasMany(Product, {foreignKey: "seller_id"});
      this.belongsTo(Basket, {foreignKey: "user_id"});
      this.belongsTo(Order, {foreignKey: "user_id"});
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    isSeller: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
