const { Producto } = require('../../db')

const postProducto = async (req, res) => {
    try {
        const { nombre, descripcion, precioCosto, precioVenta, cantidadEnStock } = req.body;

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

    return res.status(201).json(result);
    
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
   

};

module.exports = postProducto;