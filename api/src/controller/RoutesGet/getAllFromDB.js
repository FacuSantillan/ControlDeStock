const { Venta, 
    Producto, 
    DetalleDeVenta,
    OrdenDeCompra,
  } = require("../../db");

const getAllProductos = async() => {
    const response = await Producto.findAll({
        attributes:[
            "id",
            "nombre",
            "descripcion",
            "precio",
            "precio_costo",
            "cantidad_disponible",
            "proveedor"
        ],
    });
    return response.map((res) => {
        return{
            id:res.dataValues.id,
            nombre:res.dataValues.nombre,
            descripcion:res.dataValues.descripcion,
            precio:res.dataValues.precio,
            precio_costo:res.dataValues.precio_costo,
            cantidad_disponible:res.dataValues.cantidad_disponible,
            proveedor:res.dataValues.proveedor
        };
    })
};

const getAllVentas = async () => {
    const response = await Venta.findAll({
        attributes:[
            "id",
            "vendedor",
            "fecha",
            "cantidad"
        ],
        include:{ model:Producto },
        order: [['createdAt', 'DESC']],
    });
    return response.map((res) => {
        return {
            id: res.dataValues.id,
            vendedor: res.dataValues.vendedor,
            fecha: res.dataValues.fecha,
            cantidad: res.dataValues.cantidad,
            // producto: res.dataValues.Producto.map((producto)=>{
            //     return{
            //         nombre:producto.nombre,
            //         descripcion:producto.descripcion,
            //         precio:producto.precio,
            //         precio_costo:producto.precio_costo,
            //         cantidad_disponible:producto.cantidad_disponible,
            //         proveedor:producto.proveedor
            //     }
            // })   
         }
    })
}

module.exports = {
    getAllProductos,
    getAllVentas
}