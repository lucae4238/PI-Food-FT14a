import React from 'react'
import styled from 'styled-components'

const MakeYourOwn = () => {
    return (
        <Container>
            <h5>
            Make your own
            </h5>
        </Container>
    )
}

export default MakeYourOwn

let Container = styled.div`
display: inline-block;
color: white;
border: 1px solid black;
background-color: purple;
width:max-content;
padding: 6px;
margin: 0;

h5{
    padding: 6px;
    text-decoration: none;
    margin: 0;
}
`;


