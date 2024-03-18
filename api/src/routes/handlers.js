//Rutas Post
const postVendedor = require("../controller/RoutesPost/postVendedor");
const postProducto = require("../controller/RoutesPost/postProducto");

//Rutas Get
//Rutas Put
//Rutas Delete

//post Vendedor
const createVendedor = async (req, res) => {
    try {
        const { nombre } = req.body;

        const vendedorData = {
            nombre
       };

       const newVendedor = await postVendedor(vendedorData);
       res.status(200).json(newVendedor)

    } catch (error) {
        res.status(500).json("CreateVendedor-handler",{ error: error.message });

    }
};

//post Vendedor
const createProducto = async (req, res) => {
    try {
        const { nombre, descripcion, precioCosto, precioVenta, cantidadEnStock } = req.body;

        const productoData = {
            nombre, 
            descripcion, 
            precioCosto, 
            precioVenta, 
            cantidadEnStock
       };

       const newProducto = await postProducto(productoData);
       res.status(200).json(newProducto)

    } catch (error) {
        res.status(500).json("CreateProducto-handler",{ error: error.message });

    }
};

module.exports = {
    createVendedor,
    createProducto
}