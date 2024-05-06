'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrdenCompra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrdenCompra.init({
    fechaemision: DataTypes.DATE,
    situacion: DataTypes.STRING,
    total: DataTypes.FLOAT,
    nrofacturaprov: DataTypes.STRING,
    codlab: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrdenCompra',
  });
  return OrdenCompra;
};