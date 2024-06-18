import axios from 'axios';

//---------------------exportaciones de los types--------------------------------//

export const PRODUCTO_SELECCIONADO = "PRODUCTO_SELECCIONADO";
export const ELIMINAR_PRODUCTO = "ELIMINAR_PRODUCTO";
export const CLEAR_CARRY = "CLEAR_CARRY";

//---------------------------obtener recetas------------------------------------//

export const productosSeleccionados = (informacion, cantidad) => {
        return {
            type: 'PRODUCTO_SELECCIONADO',
            payload: {informacion, cantidad}
        }; 
};

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

