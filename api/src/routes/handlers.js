const postVentas = require("../controller/RoutesPost/postVentas");
const postProducto = require("../controller/RoutesPost/postProducto");

const { getAllProductos,
        getAllVentas } = require("../controller/RoutesGet/getAllFromDB");

//-----------------Crear nueva venta-----------------//
const postVenta = async (req, res) => {
    try {
        const { productoId, vendedor, fecha, cantidad } = req.body;

        if(!(productoId && cantidad)){
            return res.status(400).send({message: "Faltan datos necesarios"});
        }

        const ventaData = {
            productoId,
            vendedor,
            fecha,
            cantidad
        };
        const newVenta = await postVentas(ventaData)
        res.status(200).json(newVenta)
 
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
};

//-----------------Crear nuevo producto-----------------//
const createProducto = async (req, res) => {
    try {
        const { nombre, ultima_entrega, descripcion, precio_venta, precio_costo, cantidad_disponible, proveedor } = req.body;

        if (!nombre || !precio_venta ) {
            res.status(400).json('Falta el/los campo/s necessaryario/s')
        };

        const ProductoData = {
            nombre,
            descripcion,
            precio_venta,
            precio_costo,
            cantidad_disponible,
            proveedor,
            ultima_entrega
        }
        const producto = await postProducto(ProductoData);
        res.status(200).json(producto)


    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

//-----------------Obtener todos los productos-----------------//
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

//-----------------Obtener todas las ventas-----------------//
const getVentas = async (req, res) => {
    try {
        const response = await getAllVentas();

        if(response.length){
            res.status(200).json(response);
        } else {
            res.status(400).json("No hay ventas por ahora.")
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};


module.exports = {
    postVenta,
    createProducto,
    getProductos,
    getVentas
}