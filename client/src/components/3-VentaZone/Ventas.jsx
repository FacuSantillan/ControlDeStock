import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import productos from './productos'; // Importa el objeto de productos
import "./Ventas.css";

export default function Ventas() {
    const [cantidades, setCantidades] = useState({}); // Estado para almacenar las cantidades de cada producto
    const [productosSeleccionados, setProductosSeleccionados] = useState(productos); // Estado para almacenar los productos seleccionados

    const handleCantidadChange = (event, productId) => {
        const nuevaCantidad = event.target.value;
        setCantidades({ ...cantidades, [productId]: nuevaCantidad });
    };
    

    const handleEliminarProducto = (productId) => {
        const productosActualizados = productosSeleccionados.filter(producto => producto.id !== productId);
        setProductosSeleccionados(productosActualizados);
        const newCantidades = { ...cantidades };
        delete newCantidades[productId];
        setCantidades(newCantidades);
    };

    const handleTotalItems = () => {
        return productosSeleccionados.length
    }

    let preciosTotales = 0;
   
    const calcularPrecioTotal = (precio, cantidad) => {
        let total = (parseFloat(precio.replace('$', '')) * cantidad).toFixed(2);
        preciosTotales = preciosTotales + parseFloat(total);
        return total
    };

    const handleTotalPrecio = () => {
        let totalPrecio = 0;
            totalPrecio += preciosTotales;
        return totalPrecio; 
    };

    
    return (
        <div className='container-ventas'>
            <div className='container-productos-list'> 
            {productosSeleccionados.map((producto) => (
                
                <div className='venta-producto' key={producto.id}>

                    <input type='number' value={cantidades[producto.id] || 1} onChange={(e) => handleCantidadChange(e, producto.id)} />
                    
                    <div className='productos-information'>
                        <u className='producto-nombre'>{producto.nombre}</u>
                        <u className='cantidad-stock'>{producto.stock}</u>
                        <u className='precio-prducto'>${calcularPrecioTotal(producto.precio, cantidades[producto.id] || 1)}</u>
                        <button className='button-delete' onClick={() => handleEliminarProducto(producto.id)}><FaTimes size={18}/></button>
                    </div>

                </div>
            ))}
            </div>

            <div className='container-cobro'>
                <p className='items'> Items:{handleTotalItems()}</p>
                <p className='subtotal'>Subtotal: ${handleTotalPrecio()}</p>
                <p className='descuento'>Descuento</p>
                <input type='text'></input>
                <p className='total'>Total</p>
            </div>

        </div>
    );
}
