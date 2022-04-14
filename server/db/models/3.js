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
    static associate({Category, User, Basket, Order}) {
      this.belongsTo(Category, {foreignKey: "category_id"});
      this.belongsTo(User, {foreignKey: "seller_id"});
      
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
    category_id: DataTypes.INTEGER,
 
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
