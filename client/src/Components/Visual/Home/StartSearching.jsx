import React from 'react'
import styled from 'styled-components'
import sushi from '../../../assets/fun-sashimi.png'

const StartSearching = () => {
    return (
        <Div>
        <h1>
        here the recipes will be shown

        </h1>
        <Div>

        <Img src={sushi} />
        </Div>
         </Div>
    )
}

export default StartSearching


const Img = styled.img`
height: 25em;


`;

const Div = styled.div`
height: 30em;
background-color: yellow;
margin: 0;
display: flex;
justify-content: center;
`;