const { Producto } = require("../../db");

const createProducto = async (productoData) => {
    const { nombre, descripcion, precio, precio_costo, cantidad_disponible } = productoData;

    const newVenta = await Producto.create({
        nombre,
        descripcion,
        precio,
        precio_costo,
        cantidad_disponible
    });

    const result = await Producto.findOne({
        where: {
            id: newVenta.id, 
        },
        attributes: ["nombre", "descripcion", "precio", "precio_costo", "cantidad_disponible"]
    });
     
        return result;    
};

module.exports = createProducto;