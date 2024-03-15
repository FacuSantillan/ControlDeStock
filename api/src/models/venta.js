const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Venta = sequelize.define('Venta', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      allowNull: false,
      primaryKey: true,
    },
    productoId: {
      type: DataTypes.UUID, 
      allowNull: false,
    },
    vendedor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  // Asociación con Producto
  Venta.belongsTo(sequelize.models.Producto, { foreignKey: 'productoId' });

};
