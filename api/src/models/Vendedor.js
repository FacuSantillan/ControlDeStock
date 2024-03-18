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
    });

    Vendedor.associate = (models) => {
      Vendedor.hasMany(models.Factura, { foreignKey: 'vendedorId' });
      Vendedor.hasMany(models.Venta, { foreignKey: 'vendedorId' });
    };

    return Vendedor;
  };
  