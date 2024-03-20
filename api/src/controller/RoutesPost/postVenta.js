const { Venta, Producto, DetalleVenta, Vendedor } = require('../../db');

const crearVenta = async (req, res) => {
  try {
    const { vendedorId, productos } = req.body;

    // Calcular el costo total sumando los costos individuales de cada producto
    let costoTotal = 0;
    for (const producto of productos) {
      const { cantidad, costoUnitario } = producto;
      costoTotal += costoUnitario * cantidad;
    }

    // Crear la venta con el costo total calculado
    const venta = await Venta.create({ costoTotal, vendedorId });

    // Iterar sobre cada producto en la lista y crear un registro en la tabla DetalleVenta
    for (const producto of productos) {
      const { id: productoId, cantidad, costoUnitario } = producto;

      // Crear el registro en DetalleVenta asociando el producto con la venta
      await DetalleVenta.create({
        ventaId: venta.id,
        productoId: productoId,
        cantidad: cantidad,
        costoUnitario: costoUnitario
      });

      // Actualizar la cantidad en stock del producto
      const productoExistente = await Producto.findByPk(productoId);
      await productoExistente.decrement('cantidadEnStock', { by: cantidad });
    }

    // Obtener la información del vendedor
    const vendedor = await Vendedor.findByPk(vendedorId);

    // Obtener la información de la venta incluyendo los detalles de los productos
    const ventaConDetalles = await Venta.findByPk(venta.id, {
      include: [{ model: DetalleVenta, include: [Producto] }]
    });

    res.status(201).json({ venta: ventaConDetalles, vendedor: vendedor });
  } catch (error) {
    console.error('Error al crear la venta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  crearVenta
};
