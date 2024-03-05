const { Vendedor, 
    Venta, 
    Productos, 
    Proveedor, 
    DetalleDeVenta,
    OrdenDeCompra, 
    DetalleOrdenDeCompra  } = require("../../db");

const getAllVendedores = async() => {
    const response = await Vendedor.findAll({
        attributes:[
            "id",
            "nombre",
            "apellido"
        ],
        order: [["createdAt","DESC"]],
        include: { model: Venta }
    });

    return response.map((res) => {
        return{
            id:res.dataValues.id,
            nombre:res.dataValues.nombre,
            apellido:res.dataValues.apellido
        };
    })
};

const getAllProductos = async() => {
    const response = await Vendedor.findAll({
        attributes:[
            "id",
            "nombre",
            "apellido"
        ],
        order: [["createdAt","DESC"]],
        include: { model: Venta }
    });

    return response.map((res) => {
        return{
            id:res.dataValues.id,
            nombre:res.dataValues.nombre,
            apellido:res.dataValues.apellido
        };
    })
}