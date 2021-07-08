import React from 'react'
import Button from '../../Styles/buttons'

const MenuDiv = ({name, cb1, cb2}) => {
    return (
        <div>
            <Button onClick={cb1}>1</Button>
            <h1>{name}</h1>
            <Button onClick={cb2}>2</Button>
        </div>
    )
}

export default MenuDiv

