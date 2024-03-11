const { Producto, Proveedor } = require("../../db");

const createProducto = async (productoData) => {
    const { nombre, descripcion, precio, precio_costo, cantidad_disponible, proveedor } = productoData;

    let proveedorId;

    let existingProveedor = await Proveedor.findOne({ where: { nombre: proveedor } });
    if (!existingProveedor) {
        const newProveedor = await Proveedor.create({ nombre: proveedor });
        proveedorId = newProveedor.id;
    } else {
        proveedorId = existingProveedor.id;
    }

    const newProducto = await Producto.create({
        nombre,
        descripcion,
        precio,
        precio_costo,
        cantidad_disponible,
        proveedorId,
    });

    // Verificar si newProducto está definido antes de buscarlo
    if (newProducto) {
        const result = await Producto.findOne({
            where: {
                id: newProducto.id,
            },
            attributes: ["nombre", "descripcion", "precio", "precio_costo", "cantidad_disponible"],
            include: { model: Proveedor },
        });
        return result;
    } else {
        throw new Error("Error al crear el producto.");
    }
};

module.exports = createProducto;
