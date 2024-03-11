const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Venta', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      allowNull: false,
      primaryKey: true,
    },
    productoId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    vendedorId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    fecha: {
      type: DataTypes.STRING, 
      allowNull: false,
      unique: false,
    },
    cantidad: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  },
);
};