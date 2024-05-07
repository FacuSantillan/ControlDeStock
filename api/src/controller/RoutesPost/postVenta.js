const { Venta, Producto, DetalleVenta, Vendedor, Factura, DetalleFactura } = require('../../db');

const crearVenta = async (req, res) => {
  try {
    const { vendedorId, productos } = req.body;

    let costoTotal = 0;
    for (const producto of productos) {
      const { id, cantidad } = producto;
      const productoInfo = await Producto.findByPk(id);
    
      if (productoInfo) {
        const precioVenta = productoInfo.precioVenta;
        costoTotal += precioVenta * cantidad;
      } else {
        console.error(`Producto con ID ${id} no encontrado`);
      }
    }

    function generarNumeroAlAzar(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const fechaEmision = new Date().toISOString();
    const numeroAleatorio = generarNumeroAlAzar(1, 100000000); 

    //se crea la Factura
    const factura = await Factura.create({ total: costoTotal, fechaEmision, numeroFactura: numeroAleatorio });

    //se crea la Venta
    const venta = await Venta.create({ vendedorId, facturaId: factura.id, costoTotal, });

    for (const producto of productos) {
      const { id: productoId, cantidad } = producto;
      const productoInfo = await Producto.findByPk(productoId);

      if (productoInfo) {
        //se crea el detalle de venta
        await DetalleVenta.create({
          ventaId: venta.id,
          productoId,
          cantidad,
          costoUnitario: productoInfo.precioVenta
        });

        //se crea el detalle de factura
        await DetalleFactura.create({
          facturaId: factura.id,
          productoId,
          cantidad,
          precioUnitario: productoInfo.precioVenta,
          subtotal: productoInfo.precioVenta * cantidad
        });

        await productoInfo.decrement('cantidadEnStock', { by: cantidad });
      } else {
        console.error(`Producto con ID ${productoId} no encontrado`);
      }
    }

    const vendedor = await Vendedor.findByPk(vendedorId);

    const ventaConDetalles = await Venta.findByPk(venta.id, {
      include: [{ model: DetalleVenta, include: [Producto] }]
    });

    const facturaConDetalles = await Factura.findByPk(factura.id, {
      include: [{ model: DetalleFactura, include: [Producto] }]
    });

    res.status(201).json({ venta: ventaConDetalles, factura: facturaConDetalles, vendedor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = crearVenta;

