const { Venta, Producto, DetalleVenta, Vendedor, Factura, DetalleFactura } = require('../../db');

const crearVenta = async (req, res) => {
  try {
    const { vendedorId, productos } = req.body;

    // Calcular el costo total sumando los precios de venta individuales de cada producto
    let costoTotal = 0;
    for (const producto of productos) {
      const { id, cantidad } = producto;
    
      // Obtener el precio de venta del producto utilizando su ID
      const productoInfo = await Producto.findByPk(id);
    
      // Verificar si el producto existe
      if (productoInfo) {
        // Obtener el precio de venta del producto
        const precioVenta = productoInfo.precioVenta;
    
        // Calcular el costo total del producto y sumarlo al costo total de la venta
        costoTotal += precioVenta * cantidad;
      } else {
        console.error(`Producto con ID ${id} no encontrado`);
        // Puedes lanzar un error, devolver un mensaje de error, o tomar cualquier otra acción apropiada
      }
    }

    // Obtener la fecha y hora actual en formato ISO 8601
    const fechaEmision = new Date().toISOString();
    
    function generarNumeroAlAzar(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const numeroAleatorio = generarNumeroAlAzar(1, 1000000); 

    // Crear la factura con el costo total calculado y la fecha de emisión
    const factura = await Factura.create({ total: costoTotal, vendedorId, fechaEmision, numeroFactura: numeroAleatorio });

    // Crear la venta asociada a la factura
    const venta = await Venta.create({ vendedorId, facturaId: factura.id, costoTotal, });

    // Iterar sobre cada producto en la lista y crear un registro en la tabla DetalleVenta
    for (const producto of productos) {
      const { id: productoId, cantidad } = producto;
      const productoInfo = await Producto.findByPk(productoId);
      console.log("productoinfo", producto)

      if (productoInfo) {
        await DetalleVenta.create({
          ventaId: venta.id,
          productoId,
          cantidad,
          costoUnitario: productoInfo.dataValues.precioVenta
        })

        // Actualizar la cantidad en stock del producto
        await productoInfo.decrement('cantidadEnStock', { by: cantidad });
      } else {
        console.error(`Producto con ID ${productoId} no encontrado`);
        // Puedes lanzar un error, devolver un mensaje de error, o tomar cualquier otra acción apropiada
      }
    }

    // Obtener la información del vendedor
    const vendedor = await Vendedor.findByPk(vendedorId);

    // Obtener la información de la venta incluyendo los detalles de los productos
    const ventaConDetalles = await Venta.findByPk(venta.id, {
      include: [{ model: DetalleVenta, include: [Producto] }]
    });

    // Obtener la información de la factura incluyendo los detalles de los productos
    const facturaConDetalles = await Factura.findByPk(factura.id, {
      include: [{ model: DetalleFactura, include: [Producto] }]
    });

    res.status(201).json({ venta: ventaConDetalles, factura: facturaConDetalles, vendedor });
  } catch (error) {
    console.error('Error al crear la venta:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = crearVenta;
