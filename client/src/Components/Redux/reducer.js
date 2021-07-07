import {  GET_DETAILS, GET_RECIPES, GET_TYPES, SET_LOADING } from "./actions";
//FALTA ADD RECIPE
let initialState = {
  recipesLoaded: [],
  recipeDetails: {},
  dietsLoaded: [],
  loading: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipesLoaded: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        recipeDetails: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        dietsLoaded: action.payload,
      };
     case SET_LOADING: 
     console.log('set loading')
     return{
         ...state,
         loading: state.loading === true ? false : true
     }

    default:
      return state;
  }
}

export default reducer;
