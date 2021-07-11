import React from 'react'
import {  sortName } from '../../../Redux/actions';
import Container from '../../../Styles/Filter'
import Template from '../TemplateButton';


const Name = () => {



    return (
        <Container>
            <Template 
            inner={'Desc'}
            action={sortName}
            arg={1}
            />
            <h1>Name</h1>
            <Template 
            inner={'Asc'}
            action={sortName}
            arg={-1}
            />
        </Container>
    )
}

export default Name

