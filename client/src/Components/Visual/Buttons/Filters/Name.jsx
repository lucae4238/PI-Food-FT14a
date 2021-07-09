import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {  sortName } from '../../../Redux/actions';
import Button from '../../../Styles/buttons'
import Container from '../../../Styles/Filter'

const Name = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const Asc = () => {
        dispatch(sortName(-1));
        history.push("/home");
      };
    
    
      const Desc = () => {
        dispatch(sortName(1))
        history.push("/home")
      };


    return (
        <Container>
            <Button onClick={Desc}>Desc</Button>
            <h1>Name</h1>
            <Button onClick={Asc}>Asc</Button>
        </Container>
    )
}

export default Name

