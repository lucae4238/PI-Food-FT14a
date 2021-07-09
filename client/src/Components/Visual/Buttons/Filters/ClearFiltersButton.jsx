import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { clearFilters } from '../../../Redux/actions'
import Container from '../../../Styles/buttons'

const ClearFiltersButton= () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const clear = () => {
        dispatch(clearFilters())
        history.push('/home')
    }
    return (
        <Container  onClick={clear}>CLEAR</Container>
    )
}

export default ClearFiltersButton
