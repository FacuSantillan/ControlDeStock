import axios from 'axios';

//---------------------exportaciones de los types--------------------------------//

export const GET_RECIPES = "GET_RECIPES";

//---------------------------obtener recetas------------------------------------//

export function getRecipes() {
    return async function (dispatch){
        const response = await axios(`/recipes`);
        
     return dispatch({
            type:'GET_RECIPES',
            payload: response.data,
        });
    };
};

