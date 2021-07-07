import React from 'react'
import styled from 'styled-components'

const RecipeCard = ({name, img}) => {
    return (
        <Container>
            <h5>{name}</h5>
            <Img src={img} alt='image'/>



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

let Img = styled.img`
margin: 1em;
border-radius: 1em;
max-width: 8em;
`;



export default RecipeCard
