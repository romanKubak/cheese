'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({Product, User}) {
      this.belongsTo(User, {foreignKey: "seller_id"})
    }
  }
  Order.init({
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
