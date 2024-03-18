const { Producto } = require('../../db')

const postProducto = async (productoData) => {
   const { nombre, descripcion, precioCosto, precioVenta, cantidadEnStock } = productoData;

    const newProducto = await Producto.create({
        nombre, 
        descripcion, 
        precioCosto, 
        precioVenta, 
        cantidadEnStock
    });

    const result = await Producto.findOne({
        where:{ 
            id: newProducto.id 
        },
        attributes: [ "id", "nombre", "descripcion", "precioCosto", "precioVenta", "cantidadEnStock"],
    })

return result;

};

module.exports = postProducto;