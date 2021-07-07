import React from 'react'
import styled from 'styled-components'

function SearchBar() {
    return (
<Container>

        <form>
            <Search type='text' placeholder='LARGO de busqueda'/>
        </form>
</Container>
    )
}

let Container = styled.div`
display: flex;
justify-content: center;
form{
    width: 20% 
}

`;

let Search= styled.input`
width: 100%;
height: 3em;
`;


export default SearchBar
