//---------------------importacion de los types--------------------------------//
import {
    GET_RECIPES,
  } from "./actions";
  
  const initialState = {
    allRecipes: [],
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
    
      default:
        return state;
    }
  };
  
  export default reducer;
