require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });
  
// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { DetalleDeVenta } = sequelize.models;
const { OrdenDeCompra } = sequelize.models;
const { Producto } = sequelize.models;
const { Venta } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

DetalleDeVenta.belongsTo(Producto, { foreignKey: 'productoId', as: 'ProductoDetalle' });

// Una orden de compra tiene muchos detalles de compra (productos)
OrdenDeCompra.hasMany(DetalleDeVenta, { foreignKey: 'ordenDeCompraId', as: 'OrdenDetalle' });

// Una venta tiene muchos detalles de venta
Venta.hasMany(DetalleDeVenta, { foreignKey: 'ventaId', as: 'VentaDetalle' });

// Un detalle de venta pertenece a una venta
DetalleDeVenta.belongsTo(Venta, { foreignKey: 'ventaId', as: 'DetalleVentaVenta' });

// Una orden de compra puede tener muchos productos
OrdenDeCompra.belongsToMany(Producto, { through: DetalleDeVenta, foreignKey: 'ordenDeCompraId', as: 'OrdenCompraProducto' });

// Un producto puede estar en muchas órdenes de compra
Producto.belongsToMany(OrdenDeCompra, { through: DetalleDeVenta, foreignKey: 'productoId', as: 'ProductoOrdenCompra' });


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
