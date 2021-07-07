import {  GET_DETAILS, GET_RECIPES, GET_TYPES, PAGE_REFERENCE, SET_LOADING, SET_REFERENCE } from "./actions";
//FALTA ADD RECIPE
let initialState = {
  recipesLoaded: [],
  recipeDetails: {},
  dietsLoaded: [],
  loading: false,
  reference: '',
  pageReference: 0
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
     return{
         ...state,
         loading: state.loading === true ? false : true
     };

     case SET_REFERENCE:
       return{
         ...state,
        reference: action.payload
       }
      case PAGE_REFERENCE:
        return{
          ...state,
          pageReference: action.payload
        }

    default:
      return state;
  }
}

export default reducer;
