const { Venta } = require("../../db");

const createVenta = async (ventaData) => {
    const { producto_id, vendedor_id, fecha, total  } = ventaData;

    const newVenta = await Venta.create({
        producto_id : producto_id,
        vendedor_id : vendedor_id,
        fecha: new Date(),
        total
    });

    const result = await Venta.findOne({
        where: {
            id: newVenta.id, 
        },
        attributes: ["producto_id", "vendedor_id", "fecha", "total"]
    });
     
        return result;    
};

module.exports = createVenta;