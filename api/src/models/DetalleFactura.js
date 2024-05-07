const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const DetalleFactura = sequelize.define('DetalleFactura', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precioUnitario: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    timestamps: false, // Deshabilitar las marcas de tiempo
  });

  return DetalleFactura;
};
