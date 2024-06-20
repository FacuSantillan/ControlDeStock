import axios from 'axios';

//---------------------exportaciones de los types--------------------------------//

export const PRODUCTO_SELECCIONADO = "PRODUCTO_SELECCIONADO";
export const ELIMINAR_PRODUCTO = "ELIMINAR_PRODUCTO";
export const CLEAR_CARRY = "CLEAR_CARRY";
export const ACTUALIZAR_CANTIDAD = 'ACTUALIZAR_CANTIDAD';

//---------------------------obtener recetas------------------------------------//

export const productosSeleccionados = (informacion) => {
        return {
            type: 'PRODUCTO_SELECCIONADO',
            payload: {informacion}
        }; 
};

export const actualizarCantidad = (productId, cantidad) => ({
    type: ACTUALIZAR_CANTIDAD,
    payload: { productId, cantidad }
});

export const eliminarProducto = (productId) => {
    return {
        type: ELIMINAR_PRODUCTO,
        payload: productId
    };
};

export const clearCarry = () => {
    return {
        type: CLEAR_CARRY,
        payload: []
    };
};

