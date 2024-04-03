const { Factura, DetalleFactura, Producto } = require("../../db");

const getAllFactura = async() => {
    const response = await Factura.findAll({
        attributes:[
            "id",
            "numeroFactura",
            "fechaEmision",
            "total",
            "estado",
        ],
        include: { 
            model: DetalleFactura,
            include: { model: Producto }
        }
    });
console.log(response)
    return response.map((res) => {
        return{
            id: res.dataValues.id,
            numeroFactura: res.dataValues.numeroFactura,
            fechaEmision: res.dataValues.fechaEmision,
            total: res.dataValues.total,
            estado: res.dataValues.estado,
            detalleFactura: res.dataValues.DetalleFacturas.map((detalle) => {
                return {
                    cantidad: detalle.cantidad,
                    precioUnitario: detalle.precioUnitario,
                    subtotal: detalle.subtotal,
                    producto: {
                        id: detalle.Producto.id,
                        nombre: detalle.Producto.nombre,
                        precioVenta: detalle.Producto.precioVenta
                    }
                };
            }),

        }
    })

};

module.exports = getAllFactura;