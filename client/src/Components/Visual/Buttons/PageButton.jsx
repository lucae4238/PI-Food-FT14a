import React from 'react'
import styled from 'styled-components'
// import { useSelector , useDispatch} from 'react-redux';
// import { useHistory } from "react-router-dom";
// import { getRecipes } from '../../Redux/actions';

const PageButton = ({num}) => {

    // const reference = useSelector((state) => state.reference);
    // const dispatch = useDispatch();
    

    return (
        <Container>
            <h1>{num}</h1>
        </Container>
    )
}


let Container = styled.button`
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



export default PageButton
