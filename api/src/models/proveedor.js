const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('Proveedor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    encargado_entrega:{
      type :DataTypes.STRING ,
      allowNull: true,
      unique: false,
    },
    fecha_ultima_entrega:{
        type :DataTypes.STRING ,
        allowNull: true,
        unique: false,
      },
      telefono:{
        type :DataTypes.STRING ,
        allowNull: true,
        unique: false,
      },
  },
);
};