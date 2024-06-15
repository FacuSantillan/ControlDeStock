import axios from 'axios';

//---------------------exportaciones de los types--------------------------------//

export const PRODUCTO_SELECCIONADO = "PRODUCTO_SELECCIONADO";

//---------------------------obtener recetas------------------------------------//

export const productosSeleccionados = (productosSeleccionados) => {
    return {
        type: 'PRODUCTO_SELECCIONADO',
        payload: productosSeleccionados
    };
};

