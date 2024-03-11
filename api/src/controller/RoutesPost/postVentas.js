const { Venta } = require("../../db");

const createVenta = async (ventaData) => {
    const { productoId, vendedorId, fecha, cantidad  } = ventaData;
    console.log(ventaData)

    const newVenta = await Venta.create({
        vendedorId,
        productoId,
        fecha,
        cantidad
    });

    const result = await Venta.findOne({
        where: {
            id: newVenta.id, 
        },
        attributes: ["productoId", "vendedorId", "fecha", "cantidad"]
    });
    return result;    
};

module.exports = createVenta;