import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import { eliminarProducto, clearCarry, actualizarCantidad } from '../../redux/actions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Ventas.css";

export default function Ventas() {
    const productos = useSelector(state => state.productosSeleccionados);
    const dispatch = useDispatch();

    const [descuento, setDescuento] = useState(0);

    const handleCantidadChange = (event, productId) => {
        const nuevaCantidad = parseInt(event.target.value, 10);
        if (nuevaCantidad >= 1) {
            dispatch(actualizarCantidad(productId, nuevaCantidad));
        } else {
            handleEliminarProducto(productId);
        }
    };

    const handleEliminarProducto = (productId) => {
        dispatch(eliminarProducto(productId));
    };

    const handleTotalItems = () => {
        return productos.reduce((total, producto) => total + producto.cantidad, 0);
    }

    const calcularPrecioTotal = (precio, cantidad) => {
        const total = parseFloat(precio.replace('$', '')) * cantidad;
        return total.toFixed(2);
    };

    const handleSubtotal = () => {
        return productos.reduce((subtotal, producto) => {
            return subtotal + parseFloat(calcularPrecioTotal(producto.precio, producto.cantidad));
        }, 0).toFixed(2);
    };

    const handleTotalConDescuento = () => {
        const subtotal = handleSubtotal();
        const descuentoAplicado = subtotal * (descuento / 100);
        const totalConDescuento = subtotal - descuentoAplicado;
        return totalConDescuento.toFixed(2);
    };

    const handleClearCarry = () => {
        dispatch(clearCarry());
    }

    return (
        <div className='container-ventas'>
            <ToastContainer />
            <div className='container-productos-list'>
                {productos.length === 0 ? (
                    <p className='no-productos'>Para comenzar seleccione productos.</p>
                ) : (
                    productos.map((producto) => (
                        <div className='venta-producto' key={producto.id}>
                            <input 
                                type='number' 
                                value={producto.cantidad} 
                                onChange={(e) => handleCantidadChange(e, producto.id)} 
                                min="1"
                            />
                            <div className='productos-information'>
                                <u className='producto-nombre'>{producto.nombre}</u>
                                <u className='cantidad-stock'>{producto.stock}</u>
                                <u className='precio-prducto'>${calcularPrecioTotal(producto.precio, producto.cantidad)}</u>
                                <button className='button-delete' onClick={() => handleEliminarProducto(producto.id)}><FaTimes size={18} /></button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className='container-cobro'>
                <p className='items'> Items: {handleTotalItems()}</p>

                <p className='subtotal'>Subtotal: </p>
                <p className='subtotal-numero'> ${handleSubtotal()}</p>

                <p className='descuento'>Descuento</p>
                <input type='number' value={descuento} onChange={(e) => setDescuento(e.target.value)} />

                <p className='signo'>%</p>
                <p className='total'>Total: </p>
                <p className='total-numero'>${handleTotalConDescuento()}</p>

                <div>
                    <button className='button-clear-carry' onClick={handleClearCarry}>
                        <AiOutlineDelete size={30} />
                    </button>
                    <button className='button-pay'>
                        ir al pago
                    </button>
                    <IoIosArrowForward className='icon' size={23} />
                </div>
            </div>
        </div>
    );
}
