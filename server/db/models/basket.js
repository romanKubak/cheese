'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    
    static associate({Product, User}) {
      this.hasMany(Product, {foreignKey: 'product_id'});
      this.hasMany(User, {foreignKey: 'user_id'})
    }
  }
  Basket.init({
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};