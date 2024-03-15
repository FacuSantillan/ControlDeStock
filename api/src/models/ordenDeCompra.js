const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('OrdenDeCompra', {
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
      encargado_compra:{
        type :DataTypes.STRING ,
        allowNull: false,
        unique: false,
      },
      total:{
        type :DataTypes.STRING ,
        allowNull: false,
        unique: false,
      },
  },
);
};