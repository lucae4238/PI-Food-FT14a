import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
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
        <button 
        onClick={filter}
        >{diet}</button>

        </>
        
    )
}

export default DietsFilter
