//---------------------importacion de los types--------------------------------//
import {
    PRODUCTO_SELECCIONADO,
  } from "./actions";
  
  const initialState = {
    productosSeleccionados: [],
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      
      case PRODUCTO_SELECCIONADO:
          return {
            ...state,
            productosSeleccionados: action.payload
          };

      default:
        return state;
    }
  };
  
  export default reducer;
