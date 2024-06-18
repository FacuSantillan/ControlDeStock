//---------------------importacion de los types--------------------------------//
import {
    PRODUCTO_SELECCIONADO,
    ELIMINAR_PRODUCTO,
    CLEAR_CARRY
  } from "./actions";
  import { toast } from 'react-toastify';

  const initialState = {
    productosSeleccionados: [],
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case PRODUCTO_SELECCIONADO:
            const { informacion, cantidad } = action.payload;
            const productoExistente = state.productosSeleccionados.find(p => p.id === informacion.id);
            
            if (productoExistente) {
                return {
                    ...state,
                    productosSeleccionados: state.productosSeleccionados.map(p =>
                        p.id === informacion.id ? { ...p, cantidad: p.cantidad + cantidad } : p
                    )
                };
            } else {
                return {
                    ...state,
                    productosSeleccionados: [...state.productosSeleccionados, { ...informacion, cantidad }]
                };
            }

          case ELIMINAR_PRODUCTO:
            return {
                ...state,
                productosSeleccionados: state.productosSeleccionados.filter(producto => producto.id !== action.payload)
            };

            case CLEAR_CARRY:
            return {
                ...state,
                productosSeleccionados: action.payload
            };

      default:
        return state;
    }
  };
  
  export default reducer;
