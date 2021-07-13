import React from 'react'
import logo from '../../../assets/fast-food-unscreen.gif'

const Loading = () => {
    return (
        <div>
            <h1>Searching...</h1>
             <img src={logo} alt='loading'/>
        </div>
    )
}

export default Loading
