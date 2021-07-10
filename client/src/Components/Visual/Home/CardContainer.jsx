import React from "react";
import { useSelector } from "react-redux";
import Container from '../../Styles/RecipesC'


import Pagehandler from '../Buttons/PageRef/Pagehandler'
import Menu from "../Menu/Menu";
import RecipeCard from "../Recipes/CardRecipe";
import NoResultsFilter from "./NoResults/NoResultsFilter";
import NoResultsSearch from './NoResults/NoResultsSearch'


const CardContainer = () => {
  const loading = useSelector((state) => state.loading);
  const recipes = useSelector((state) => state.recipesLoaded);
  const page = useSelector((state) => state.pageReference);
  const reference = useSelector((state) => state.reference);
  const recipesUnfiltered = useSelector((state) => state.recipesUnfiltered);


  let index = page * 9;
  let end =
    page === 0
      ? 9
      : index === 99
      ? recipes.length + 1
      : index + 9 < recipes.length - 1
      ? index + 9
      : recipes.length - 1;

  let results = recipes === [] ? [] : recipes.slice(index, end);
  

  return (
    <>
    <Container>

      {recipesUnfiltered.length > 0 &&
        reference !== "" &&
        results.length === 0 && <NoResultsFilter />}
      {loading === true ? (
        <p>loading...</p>
      ) : (
        results.map(
          (r) =>

          !r["message"] && (
              <div key={r.id}>
                <RecipeCard
                  name={r.name}
                  img={r.image}
                  id={r.id}
                  diets={r.diets}
                  score={r.score}
                />
              </div>
            )
        )
      )}
      {recipesUnfiltered.length > 1 && <Menu /> }
    </Container>
      {results.length >1 && loading === false && <Pagehandler /> }
    </>
  );
};

export default CardContainer;
