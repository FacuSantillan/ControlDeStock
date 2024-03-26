const { Factura, DetalleFactura } = require("../../db");

const getAllFactura = async() => {
    const response = await Factura.findAll({
        attributes:[
            "id",
            "numeroFactura",
            "fechaEmision",
            "total",
            "estado",
        ],
        include: { model: DetalleFactura }
    });
console.log(response)
    return response.map((res) => {
        return{
            id: res.dataValues.id,
            numeroFactura: res.dataValues.numeroFactura,
            fechaEmision: res.dataValues.fechaEmision,
            total: res.dataValues.total,
            estado: res.dataValues.estado,
            detalleFactura: res.dataValues.DetalleFactura.map((detallefactura) => {
                return {
                    cantidad: detallefactura.cantidad,
                    precioUnitario: detallefactura.precioUnitario,
                    subtotal: detallefactura.subtotal,
                };
            }),

        }
    })

};

module.exports = getAllFactura;