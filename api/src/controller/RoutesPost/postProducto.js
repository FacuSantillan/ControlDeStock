const { Producto, Proveedor } = require("../../db");

const createProducto = async (productoData) => {
    const { nombre, descripcion, precio, precio_costo, cantidad_disponible, proveedor } = productoData;

    let proveedorId;

    let existingProveedor = await Proveedor.findOne({ where: { nombre: proveedor } });

    if (!existingProveedor) {
        // Si el proveedor no existe, crear uno nuevo
        const newProveedor = await Proveedor.create({ nombre: proveedor });
        proveedorId = newProveedor.id;
    } else {
        proveedorId = existingProveedor.id;
    }

    // Crear el producto utilizando el ID del proveedor
    const newProducto = await Producto.create({
        nombre,
        descripcion,
        precio,
        precio_costo,
        cantidad_disponible,
        proveedorId // Utilizamos el ID del proveedor aquí
    });

    const result = await Producto.findOne({
        where: {
            id: newProducto.id,
        },
        attributes: ["nombre", "descripcion", "precio", "precio_costo", "cantidad_disponible"]
    });

    return result;
};

module.exports = createProducto;
