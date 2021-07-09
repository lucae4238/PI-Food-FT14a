import React from "react";
import {  useSelector } from "react-redux";
import s from "styled-components";
import Pagehandler from "./Buttons/Pagehandler";
import Menu from "./Menu";
import RecipeCard from "./Recipes/CardRecipe";





const CardContainer = () => {
  const loading = useSelector((state) => state.loading);
  const recipes = useSelector((state) => state.recipesLoaded);
  const page = useSelector(state => state.pageReference)


  let index = page * 9

  let results = recipes.slice(index, index + 9)



  return (
    <Container>

      {loading === true ? (
        <p>loading...</p>
      ) : (
        results.map((r) => (

            <RecipeCard key={r.id} name={r.name} img={r.image} id={r.id} diets={r.diets} score={r.score}/>

        ))
      )}
      {results.length === 0  || loading === true ? <></> : <Pagehandler />}
      {results.length === 0  || loading === true ? <></> : <Menu />}
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
