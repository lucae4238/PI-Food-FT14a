import React from "react";
import s from "styled-components";
import MakeYourOwn from "./Buttons/MakeYourOwnButton";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import RecipeCard from "./Recipes/CardRecipe";
import { useSelector, useDispatch } from "react-redux";
// import PageButton from "./Buttons/PageButton";
import { useHistory } from "react-router-dom";
import { setLoading, setPageReference } from "../Redux/actions";
import Pagehandler from "./Buttons/Pagehandler";

export const Home = () => {
  //   let timer = () => setTimeout(() => dispatch(setLoading()), 2000);
  const recipes = useSelector((state) => state.recipesLoaded);
  const loading = useSelector((state) => state.loading);
  const reference = useSelector((state) => state.reference);
  const dispatch = useDispatch();
  const history = useHistory();

  let title =
    reference === ""
      ? "Find"
      : reference.charAt(0).toUpperCase() + reference.slice(1);

  return (
    <Container>
      <h1>{title} Recipes</h1>
      <Link to="/makeRecipe">
        <MakeYourOwn />
      </Link>
      <SearchBar />

      <CardContainer>
        {loading === true ? (
          <p>loading...</p>
        ) : (
          recipes.map((r) => (
            <div key={r.id}>
              <RecipeCard name={r.name} img={r.image} id={r.id}/>
            </div>
          ))
        )}
        {loading === true ? <></> : <Pagehandler />}
      </CardContainer>
    </Container>
  );
};

let Container = s.div`
background-color: blue;

display:table;
width:100%;
overflow-y: scroll;
height: 91.6vh;


h1{
    display: flex;
    justify-content: center;
    background-color: white;
}
`;

let CardContainer = s.div`
background-color: green;
height: max-content;
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
grid-template-rows: 1fr 1fr 1fr ;
overflow-y: scroll;


`;
