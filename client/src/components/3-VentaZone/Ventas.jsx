import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

import productos from './productos';
import "./Ventas.css";

export default function Ventas() {
    const [cantidades, setCantidades] = useState({});
    const [descuento, setDescuento] = useState(0);
    const [productosSeleccionados, setProductosSeleccionados] = useState(productos);

    //Handle para saber la cantidad de cada producto
    const handleCantidadChange = (event, productId) => {
        const nuevaCantidad = event.target.value;
        setCantidades({ ...cantidades, [productId]: nuevaCantidad });
    };

    //Handle para eliminar productos 
    const handleEliminarProducto = (productId) => {
        const productosActualizados = productosSeleccionados.filter(producto => producto.id !== productId);
        setProductosSeleccionados(productosActualizados);
        const newCantidades = { ...cantidades };
        delete newCantidades[productId];
        setCantidades(newCantidades);
    };

    //Handle para saber el total de productos 
    const handleTotalItems = () => {
        return productosSeleccionados.length;
    }

    let preciosTotales = 0;
   
    const calcularPrecioTotal = (precio, cantidad) => {
        const total = parseFloat(precio.replace('$', '')) * cantidad;
        subtotal += total;
        return total.toFixed(2);
    };

    const handleTotalPrecio = () => {
        return subtotal.toFixed(2);
    };

    //Handle para realizar el descuento
    const handleTotalDescuento = () => {
        const precio = handleTotalPrecio();
        const descuentoAplicado = precio * (descuento / 100);
        const totalConDescuento = precio - descuentoAplicado;
        return totalConDescuento.toFixed(2);
    };

    //Handle para limpiar el carro
    const handleClearCarry = () => {
        setProductosSeleccionados([]);

    }

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
                            <button className='button-delete' onClick={() => handleEliminarProducto(producto.id)}><FaTimes size={18} /></button>
                        </div>
                    </div>
                ))}
            </div>

            <div className='container-cobro'>
                <p className='items'> Items: {handleTotalItems()}</p>

                <p className='subtotal'>Subtotal: </p>
                <p className='subtotal-numero'> ${handleTotalPrecio()}</p>

                <p className='descuento'>Descuento</p>
                <input type='number' value={descuento} onChange={(e) => setDescuento(e.target.value)} />

                <p className='signo'>%</p>
                <p className='total'>Total: </p>
                <p className='total-numero'>${handleTotalDescuento()}</p>

                <div>

                <button className='button-clear-carry' onClick={handleClearCarry}>
                    <AiOutlineDelete size={30}/>
                </button>

                <button className='button-pay' >
                       ir al pago
                          
                    </button>

                    <IoIosArrowForward className='icon' size={23}/>
                </div>
            </div>
        </div>
    );
}
