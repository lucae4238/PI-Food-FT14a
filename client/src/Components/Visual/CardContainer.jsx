import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "styled-components";
import { sortName } from "../Redux/actions";
import Pagehandler from "./Buttons/Pagehandler";
import Menu from "./Menu";
import RecipeCard from "./Recipes/CardRecipe";
import Button from '../Styles/buttons'
import { useHistory } from "react-router";



const CardContainer = () => {
  const loading = useSelector((state) => state.loading);
  const recipes = useSelector((state) => state.recipesLoaded);
  const dispatch = useDispatch();
  const history = useHistory();


  const nameSort = () => {
    dispatch(sortName(-1));
    history.push("/home");
  };

  const nameSortd = () => {
    dispatch(sortName(1))
    history.push("/home")

  };


  return (
    <Container>
      {console.log(recipes)}
      {recipes.length === 0 ? (
        <></>
      ) : (
        <>
          <Button onClick={nameSort}>SORT ASC</Button>
          <Button onClick={nameSortd}>SORT desc</Button>
        </>
      )}
      {loading === true ? (
        <p>loading...</p>
      ) : (
        recipes.map((r) => (
          <div key={r.id}>
            <RecipeCard name={r.name} img={r.image} id={r.id} diets={r.diets} />
          </div>
        ))
      )}
      {recipes.length === 0 ? <></> : <Pagehandler />}
      {recipes.length === 0 ? <></> : <Menu />}
    </Container>
  );
};

let Container = s.div`
background-color: green;
height: max-content;
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
grid-template-rows: 1fr 1fr 1fr ;
overflow-y: scroll;
`;



export default CardContainer;
