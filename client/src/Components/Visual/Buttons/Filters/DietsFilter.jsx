import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { filterDiet } from '../../../Redux/actions'


const DietsFilter = ({diet}) => {
const history = useHistory();
const dispatch = useDispatch()

const filter = () => {
    dispatch(filterDiet(diet))
    history.push('/home')
}


    return (
        <>
        <Button 
        onClick={filter}
        >{diet}</Button>

        </>
        
    )
}


const Button = styled.button`
border-radius: ${props => props.theme.glassBorderRadius};
background: ${props => props.theme.glassWhite};
margin: 0.5rem;
border: ${props => props.theme.darkBorder};
padding: 0.25em 1em;

transition: box-shadow 0.4s ease;
&:hover {
  box-shadow: ${(props) => props.theme.hoverShadow};
}
`;


export default DietsFilter
