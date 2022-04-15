'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category, Product }) {
      this.belongsTo(Category, {foreignKey: "category_id"});
      this.hasMany(Product, {foreignKey: "subCategory_id"})
    }
  }
  SubCategory.init({
    title: DataTypes.STRING,
    img: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SubCategory',
  });
  return SubCategory;
};
