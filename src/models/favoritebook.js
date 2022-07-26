'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FavoriteBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FavoriteBook.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    image: DataTypes.STRING,
    rating: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'FavoriteBook',
    tableName: 'favorite_book',
    timestamps: true,
    underscored: true
  });
  return FavoriteBook;
};