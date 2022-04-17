'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({Product, User}) {
      this.belongsTo(User, {foreignKey: "seller_id"})
      this.belongsTo(Product, {foreignKey: "product_id"})
    }
  }
  Order.init({
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    statusClient: DataTypes.BOOLEAN,
    statusSeller: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
