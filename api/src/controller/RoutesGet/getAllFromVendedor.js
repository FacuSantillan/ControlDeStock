const { Vendedor, Venta } = require("../../db");

const getAllVendedors = async() => {
    const response = await Vendedor.findAll({
        attributes:[
            "id",
            "nombre"
        ],
        include: { model: Venta }
    });

    return response.map((res) => {
        return{
            id: res.dataValues.id,
            nombre: res.dataValues.nombre,
            Venta: res.dataValues.Venta
        }
    })

};

module.exports = getAllVendedors;