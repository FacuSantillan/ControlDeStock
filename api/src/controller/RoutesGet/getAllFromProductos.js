const { Producto } = require("../../db");

const getAllProducto = async() => {
    const response = await Producto.findAll({
        attributes:[
            "id",
            "nombre",
            "descripcion",
            "precioCosto",
            "precioVenta",
            "cantidadEnStock"
        ]
    });
    console.log(response)
    return response.map((res) => {
        return{
            id: res.dataValues.id,
            nombre: res.dataValues.nombre,
            descripcion: res.dataValues.descripcion,
            precioCosto: res.dataValues.precioCosto,
            precioVenta: res.dataValues.precioVenta,
            cantidadEnStock: res.dataValues.cantidadEnStock,
        }
    })
};

module.exports = getAllProducto;