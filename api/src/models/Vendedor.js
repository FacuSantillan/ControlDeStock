const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Vendedor = sequelize.define('Vendedor', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false, // Deshabilitar las marcas de tiempo
  });

  return Vendedor;
};
