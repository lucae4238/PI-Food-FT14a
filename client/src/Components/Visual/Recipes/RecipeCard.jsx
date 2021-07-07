import React from 'react'
import styled from 'styled-components'

const RecipeCard = ({title}) => {
    return (
        <Container>
            <h1>{title}</h1>


        </Container>
    )
}

let Container = styled.div`
border: 1px solid black;
background-color: white;
margin: 3em;
width: 20em;
height: 15em;


`;


export default RecipeCard
