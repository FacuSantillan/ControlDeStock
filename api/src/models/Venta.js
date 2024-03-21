const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Venta = sequelize.define('Venta', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    costoTotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },{
    timestamps: false,
  });

  return Venta;
};
