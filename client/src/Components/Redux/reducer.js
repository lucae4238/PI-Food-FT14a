import filterByDiet from "../../Sort Functions/Diet/FilterByDiet";
import sortByName from "../../Sort Functions/Name/SortByName";
import sortByScore from "../../Sort Functions/Score/SortByScore";
import {  GET_DETAILS, GET_RECIPES, GET_TYPES, PAGE_REFERENCE, SET_LOADING, SET_REFERENCE, SORT_NAME, SORT_SCORE, FILTER_DIET, CLEAR_FILTERS, sortName } from "./actions";
//FALTA ADD RECIPE
let initialState = {
  recipesLoaded: [],
  recipesUnfiltered: [],
  recipeDetails: {},
  dietsLoaded: [],
  loading: false,
  reference: '',
  pageReference: 0,
};


export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipesLoaded: action.payload,
        recipesUnfiltered: action.payload,
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
        dietsLoaded: sortByName(-1, action.payload)
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
      case FILTER_DIET: 
      return {
        ...state, 
        recipesLoaded: filterByDiet(action.payload, state.recipesLoaded),
        pageReference: 0
      }
      case CLEAR_FILTERS:
      return { 
        ...state,
        recipesLoaded: state.recipesUnfiltered
      }

    default:
      return state;
  }
}

export default reducer;
