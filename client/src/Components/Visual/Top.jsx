import React from 'react'
import { Link } from 'react-router-dom';
import s from 'styled-components'


function Top() {
    return (
        <Container>
            <Link to='/home'>
                <h1>HOME </h1>
            </Link>
        </Container>
    )
}
//SI SE CAMBIA LA ALTURA DE ESTO HAY QUE MODIFICAR LA ALTURA DE HOME
let Container = s.div`
background-color: red;
height: 4em;
display: flex;
justify-content: center;


h1{
    margin: 0;

}
`;


export default Top
