//---------------------importacion de los types--------------------------------//
import {
    PRODUCTO_SELECCIONADO,
    ELIMINAR_PRODUCTO,
    CLEAR_CARRY,
    ACTUALIZAR_CANTIDAD

  } from "./actions";
  import { toast } from 'react-toastify';

  const initialState = {
    productosSeleccionados: [],
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case PRODUCTO_SELECCIONADO: {
        const { informacion } = action.payload;
        const productoExistente = state.productosSeleccionados.find(p => p.id === informacion.id);

        if (productoExistente) {
            return {
                ...state,
                productosSeleccionados: state.productosSeleccionados.map(p =>
                    p.id === informacion.id ? { ...p, cantidad: p.cantidad + 1 } : p
                )
            };
        } else {
            return {
                ...state,
                productosSeleccionados: [...state.productosSeleccionados, { ...informacion, cantidad: 1 }]
            };
        }
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

            case ACTUALIZAR_CANTIDAD: {
              const { productId, cantidad } = action.payload;
              return {
                  ...state,
                  productosSeleccionados: state.productosSeleccionados.map(producto =>
                      producto.id === productId ? { ...producto, cantidad } : producto
                  )
              };
          }

      default:
        return state;
    }
  };
  
  export default reducer;
