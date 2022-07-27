'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FavoriteBook extends Model {
    static associate(models) {
      // define association here
    }
  }
  FavoriteBook.init({
    id: {
      primaryKey: true,
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
    tableName: 'favorite_books',
    underscored: true,
    timestamps: true
  });
  return FavoriteBook;
};