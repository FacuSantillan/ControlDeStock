const { Producto } = require("../../db");

const createProducto = async (productoData) => {
    const { nombre, descripcion, precio_venta, precio_costo, cantidad_disponible,
    proveedor, ultima_entrega } = productoData;

    const newProducto = await Producto.create({
        nombre,
        descripcion,
        precio_venta,
        precio_costo,
        cantidad_disponible,
        proveedor,
        ultima_entrega
    });
    
    const result = await Producto.findOne({
        where: {
            id: newProducto.id,
        },
        attributes: ["nombre", "descripcion", "precio_venta", "precio_costo", "cantidad_disponible", "proveedor", "ultima_entrega"],
    });

    return result;
};

module.exports = createProducto;
