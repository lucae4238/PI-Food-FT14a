import React from 'react'
import { useSelector } from 'react-redux'


const NoResultsSearch = () => {
    const reference = useSelector(state => state.reference)

    return (
        <h1>No {reference} recipes found </h1>
    )
}

export default NoResultsSearch
