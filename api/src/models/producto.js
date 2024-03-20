const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Producto = sequelize.define('Producto', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    precioCosto: {
      type: DataTypes.FLOAT, 
      allowNull: false,
    },
    precioVenta: {
      type: DataTypes.FLOAT, 
      allowNull: false,
    },
    cantidadEnStock: {
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
  });

  return Producto;
};
