const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('proveedor', {
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
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    encargado_entrega:{
      type :DataTypes.STRING ,
      allowNull: false,
      unique: false,
    },
    fecha_ultima_entrega:{
        type :DataTypes.STRING ,
        allowNull: false,
        unique: false,
      },
      telefono:{
        type :DataTypes.STRING ,
        allowNull: false,
        unique: false,
      },
  },
);
};