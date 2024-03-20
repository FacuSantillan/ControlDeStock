const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const DetalleVenta = sequelize.define('DetalleVenta', {
        cantidad: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        costoUnitario: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        ventaId: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: 'Venta',
            key: 'id'
           }}
      });
    
      return DetalleVenta;
};
