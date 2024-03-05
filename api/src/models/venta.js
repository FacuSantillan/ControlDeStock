const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Venta', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      allowNull: false,
      primaryKey: true,
    },
    producto_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    vendedor_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    fecha: {
      type: DataTypes.ARRAY(DataTypes.DATE), // Assuming DATE data type, change accordingly if needed
      allowNull: false,
      unique: false,
    },
    total: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  },
);
};