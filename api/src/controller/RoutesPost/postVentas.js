const { Venta, Producto } = require("../../db");

const createVenta = async (ventaData) => {
    const { productoId, vendedor, fecha, cantidad  } = ventaData;

    const newVenta = await Venta.create({
        vendedor,
        productoId,
        fecha,
        cantidad
    });

    const result = await Venta.findOne({
        where: {
            id: newVenta.id, 
        },
        attributes: ["id", "fecha", "cantidad"],
        include: [
            {
                model: Producto,
                attributes: ["nombre", "descripcion", "precio_venta", "precio_costo", "cantidad_disponible", "proveedor", "ultima_entrega", "vendedor"] // Agrega aquí los atributos que deseas obtener del producto
            },
        ],
    });

    return result;    
};

module.exports = createVenta;
