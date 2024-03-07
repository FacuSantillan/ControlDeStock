const postVentas = require("../controller/RoutesPost/postVentas");
const postVendedor = require("../controller/RoutesPost/postVendedor");
const postProducto = require("../controller/RoutesPost/postProducto");

const { getAllVendedores, getAllProductos } = require("../controller/RoutesGet/getAllFromDB");

//-----------------Crear nueva venta-----------------//
const postVenta = async (req, res) => {
    try {
        const { producto_id, vendedor_id, fecha, total  } = req.body;

        if(!(producto_id && total)){
            return res.status(400).send({message: "Faltan datos necesarios"});
        }

        const ventaData = {
            producto_id,
            vendedor_id,
            fecha,
            total
        };
        const newVenta = await postVentas(ventaData)
        res.status(200).json(newVenta)
 
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
};

//-----------------Crear nuevo vendedor-----------------//
const createVendedor = async (req, res) => {
    try {
        const { nombre, apellido } = req.body;

        if (!nombre || !apellido ) {
            res.status(400).json('Falta el/los campo/s necessaryario/s')
        };

        const vendedorData = {
            nombre,
            apellido
        }
        const vendedores = await postVendedor(vendedorData);
        res.status(200).json(vendedores)


    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

//-----------------Crear nuevo producto-----------------//
const createProducto = async (req, res) => {
    try {
        const { nombre, descripcion, precio, precio_costo, cantidad_disponible, proveedor } = req.body;

        if (!nombre || !precio ) {
            res.status(400).json('Falta el/los campo/s necessaryario/s')
        };

        const ProductoData = {
            nombre,
            descripcion,
            precio,
            precio_costo,
            cantidad_disponible,
            proveedor
        }
        const producto = await postProducto(ProductoData);
        res.status(200).json(producto)


    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

const getProductos = async(req, res) => {
try {
    const response = await getAllProductos();

    if(response.length){
        res.status(200).json(response); // Si hay reservas, se envía la respuesta 200
    } else {
        res.status(400).json('No hay productos momentaneamente.'); // Si no hay reservas, se envía la respuesta 400
    }
} catch (error) {
    res.status(500).json({ error: error.message })
    }
};

module.exports = {
    postVenta,
    createVendedor,
    createProducto,
    getProductos
}