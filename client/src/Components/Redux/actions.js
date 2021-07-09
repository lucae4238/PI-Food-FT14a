export const GET_RECIPES = "GET_RECIPES";
export const GET_TYPES = "GET_TYPES";
export const ADD_RECIPE = "ADD_RECIPE";
export const GET_DETAILS = "GET_DETAILS";
export const SET_LOADING = "SET_LOADING";
export const SET_REFERENCE = "SET_REFERENCE";
export const PAGE_REFERENCE = "PAGE_REFERENCE";
export const SORT_NAME = "SORT_NAME";
export const SORT_SCORE = "SORT_SCORE";



export const getRecipes = (name, page = 0, order, sort,diet) => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/recipes?name=${name}&page=${page}&order=${order}&sort=${sort}&diet=${diet}`)
      .then((response) => response.json())
      .then((json) => {
        return dispatch({
          type: GET_RECIPES,
          payload: json,
        });
      })
  };
};

export const getDetails = (id) => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/recipes/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: GET_DETAILS,
          payload: json,
        });
      });
  };
};

export const getTypes = () => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/types/`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: GET_TYPES,
          payload: json,
        });
      });
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const setReference = (name) => {
  return {
    type: SET_REFERENCE,
    payload: name,
  };
};

export const setPageReference = (num) => {
  return {
    type: PAGE_REFERENCE,
    payload: num,
  };
};

export const sortName = (num) => {
  return {
    type: SORT_NAME,
    payload: num,
  }
}

export const sortScore = (num) => {
  return{
    type:SORT_SCORE,
    payload: num,
  }
}