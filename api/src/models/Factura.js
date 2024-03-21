const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Factura = sequelize.define('Factura', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    numeroFactura: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    fechaEmision: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    estado: {
      type: DataTypes.ENUM('pendiente', 'pagada'), 
      allowNull: false,
      defaultValue: 'pendiente', 
    },
  },{
    timestamps: false,
  });

  return Factura;
};
