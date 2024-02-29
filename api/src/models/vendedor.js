const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('vendedor', {
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
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
  },
);
};