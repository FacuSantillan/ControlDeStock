const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('venta', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      allowNull: false,
      primaryKey: true,
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