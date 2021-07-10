import React from "react";
import s from "styled-components";
import MakeYourOwn from "./Buttons/MakeYourOwnButton";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";
import CardContainer from "./CardContainer";
import StartSearching from "./StartSearching";
import NoResultsFilter from "./NoResultsFilter";

export const Home = () => {
  const reference = useSelector((state) => state.reference);
  const recipesUnfiltered = useSelector(state => state.recipesUnfiltered)

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
    {
      recipesUnfiltered.length === 0 && reference === '' && <StartSearching />
    }
  
    
      <CardContainer />
    </Container>
  );
};

let Container = s.div`
background-color: blue;

display:table;
width:100%;
overflow-y: scroll;
height: 91.9vh;



h1{
    display: flex;
    justify-content: center;
    background-color: white;
}
`;

