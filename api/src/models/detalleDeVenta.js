const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('detalleDeVenta', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      allowNull: false,
      primaryKey: true,
    },
    venta_Id: {
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