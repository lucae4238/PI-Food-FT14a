import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { sortScore } from '../../../Redux/actions';
import Button from '../../../Styles/buttons'
import Container from '../../../Styles/Filter'

const Name = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const Asc = () => {
        dispatch(sortScore(-1));
        history.push("/home");
      };
    
    
      const Desc = () => {
        dispatch(sortScore(1))
        history.push("/home")
      };


    return (
        <Container>
            <Button onClick={Asc}>Desc</Button>
            <h1>Score</h1>
            <Button onClick={Desc}>Asc</Button>
        </Container>
    )
}

export default Name

