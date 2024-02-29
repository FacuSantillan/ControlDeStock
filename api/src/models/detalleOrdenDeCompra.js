const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('DetalleOrdenDeCompra', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
        allowNull: false,
        primaryKey: true,
      },
      orden_compra_Id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      producto_Id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      cantidad:{
        type :DataTypes.STRING ,
        allowNull: false,
        unique: false,
      },
      precio_unitario:{
          type :DataTypes.STRING ,
          allowNull: true,
          unique: false,
        }
  },
);
};