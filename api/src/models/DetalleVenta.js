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
      });
    
      return DetalleVenta;
};
