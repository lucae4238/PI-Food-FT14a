import React from 'react'
import { useDispatch } from 'react-redux';
import Container from '../../Styles/buttons'
import { useHistory } from 'react-router';

const Template = ({action,arg,inner}) => {
 
    const dispatch = useDispatch();
    const history = useHistory()

    const handleClick = () => {
        if( action){
            dispatch(action(arg))
            history.push('/home')
            window.scrollTo(0, 0)
        }
    }
    return (
        <Container onClick={handleClick}>
            <h5>{inner}</h5>
        </Container>
    )
}

export default Template



