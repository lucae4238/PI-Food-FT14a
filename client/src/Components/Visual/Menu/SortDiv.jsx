import React from 'react'
import styled from 'styled-components'
import Button from '../Buttons/TemplateButton'



const FilterDiv = ({innerLeft, innerRight,actionLeft, actionRight,argLeft,argRight,title,}) => {
    return (
        <Div>
        <Button
        inner={innerLeft}
        action={actionLeft}
        arg={argLeft}
        />
        <h1>{title}</h1>
        <Button 
        inner={innerRight}
        action={actionRight}
        arg={argRight}
        />
    </Div>
    )
}

const Div = styled.div`
display: flex;
    justify-content: space-between;
    margin: 10px;
`;

export default FilterDiv


