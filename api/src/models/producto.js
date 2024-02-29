const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Producto', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      precio:{
        type :DataTypes.STRING ,
        allowNull: false,
        unique: false,
      },
      precio_costo:{
        type :DataTypes.STRING ,
        allowNull: false,
        unique: false,
      },
      cantidad_disponible:{
          type :DataTypes.STRING ,
          allowNull: false,
          unique: false,
        }
  },
);
};