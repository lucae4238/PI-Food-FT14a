export const GET_RECIPES = "GET_RECIPES";
export const GET_TYPES = "GET_TYPES";
export const ADD_RECIPE = "ADD_RECIPE";
export const GET_DETAILS = "GET_DETAILS";
export const SET_LOADING = "SET_LOADING";

export const getRecipes = (name, page = 0) => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/recipes?name=${name}&page=${page}`)
      .then((response) => response.json())
      .then((json) => {
        return dispatch({
          type: GET_RECIPES,
          payload: json,
        });
      });
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
