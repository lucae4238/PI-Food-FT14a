import React from 'react'
import s from 'styled-components'
import MakeYourOwn from './Buttons/MakeYourOwnButton'
import SearchBar from './SearchBar'
import { Link } from "react-router-dom";
import RecipeCard from './Recipes/RecipeCard';


export const Home = () => {
    return (
        <Container>
            {/* CUANDO SE USE REDUX HAY QUE PONER EL FIND COMO VARIABLE, SI ES NULO EL SEARCH QUE SEA FIND */}
        <h1>Find Recipes</h1>
        <Link to='/makeRecipe'>
        <MakeYourOwn/>
        </Link>
        <SearchBar/>
        <CardContainer>

        <RecipeCard title='title'/>
        <RecipeCard title='title2'/>
        <RecipeCard title='title2'/>
        <RecipeCard title='title2'/>
        <RecipeCard title='title2'/>
        <RecipeCard title='title2'/>
        <RecipeCard title='title2'/>
        <RecipeCard title='title2'/>
        <RecipeCard title='title2'/>
        </CardContainer>
        {/* map recipe list  => tarjetas hasta el 9 */}
        </Container>
    )
}


let Container = s.div`
background-color: blue;

display:table;
width:100%;
overflow-y: scroll;
height: 91.6vh;


h1{
    display: flex;
    justify-content: center;
    color: red;
}
`;

let CardContainer = s.div`
background-color: green;
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
grid-template-rows: 1fr 1fr 1fr ;


`;