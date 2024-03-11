const { Vendedor, 
    Venta, 
    Producto, 
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
    const response = await Producto.findAll({
        attributes:[
            "id",
            "nombre",
            "descripcion",
            "precio",
            "precio_costo",
            "cantidad_disponible"
        ],
        include: { model: Proveedor }
    });
    return response.map((res) => {
        return{
            id:res.dataValues.id,
            nombre:res.dataValues.nombre,
            descripcion:res.dataValues.descripcion,
            precio:res.dataValues.precio,
            precio_costo:res.dataValues.precio_costo,
            cantidad_disponible:res.dataValues.cantidad_disponible
        };
    })
};

module.exports = {
    getAllProductos,
    getAllVendedores
}