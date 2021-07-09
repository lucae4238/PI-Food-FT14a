import sortByName from "../../Sort Functions/Name/SortByName";
import sortByScore from "../../Sort Functions/Score/SortByScore";
import {  GET_DETAILS, GET_RECIPES, GET_TYPES, PAGE_REFERENCE, SET_LOADING, SET_REFERENCE, SORT_NAME, SORT_SCORE } from "./actions";
//FALTA ADD RECIPE
let initialState = {
  recipesLoaded: [],
  recipeDetails: {},
  dietsLoaded: [],
  loading: false,
  reference: '',
  pageReference: 0,
  order: ''
};



export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipesLoaded: action.payload,
        loading:false
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
      case SORT_NAME: 
      console.log('here')
      return {
        ...state, 
        recipesLoaded: sortByName(action.payload, state.recipesLoaded),
        pageReference: 0

      }

      case SORT_SCORE:
        return {
          ...state, 
          recipesLoaded: sortByScore(action.payload, state.recipesLoaded),
          pageReference: 0
        }

    default:
      return state;
  }
}

export default reducer;
