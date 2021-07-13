import React from 'react'
import Container from '../../Styles/buttons'
import { Link } from "react-router-dom";


const MakeYourOwn = () => {
    return (
            <Link to="/makeRecipe">
        <Container>
            <h5>
            Make your own
            </h5>
        </Container>

      </Link>
    )
}

export default MakeYourOwn




