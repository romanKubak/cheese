'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({SubCategory, User, Basket, Order}) {
      this.belongsTo(SubCategory, {foreignKey: "subCategory_id"});
      this.belongsTo(User, {foreignKey: "seller_id"});
      this.hasMany(Order, {foreignKey: "product_id"})
      
      this.belongsToMany(User, {
				through: Basket,
				foreignKey: 'product_id',
				otherKey: 'user_id',
			});
    
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    img: DataTypes.STRING,
    statusClient: DataTypes.BOOLEAN,
    statusSeller: DataTypes.BOOLEAN,
    subCategory_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
