const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Venta', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      allowNull: false,
      primaryKey: true,
    },
    producto_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    vendedor: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    total: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    }
  },
);
};