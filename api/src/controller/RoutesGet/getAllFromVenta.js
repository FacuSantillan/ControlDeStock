const { Venta, DetalleVenta, Producto } = require("../../db");

const getAllVenta = async() => {
    const response = await Venta.findAll({
        attributes:[
            "id",
            "costoTotal",
        ],
        include: { 
            model: DetalleVenta,
            include: { model: Producto }
        }
    });
    
    return response.map((res) => {
        return{
            id: res.dataValues.id,
            costoTotal: res.dataValues.costoTotal,
            detalleVenta: res.dataValues.DetalleVenta.map((detalle) => {
                return {
                    cantidad: detalle.cantidad,
                    precioUnitario: detalle.precioUnitario,
                    producto: {
                        id: detalle.Producto.id,
                        nombre: detalle.Producto.nombre,
                        precioVenta: detalle.Producto.precioVenta
                    }
                };
            }),

        };
    });
};

module.exports = getAllVenta;