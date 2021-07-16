import React from 'react'
import styled from 'styled-components'
import { clearFilters } from '../../../Redux/actions'
import Button from '../TemplateButton'


const ClearFilters = () => {
    return (
        <Div>
        
        
        <Button 
          action={clearFilters}
          inner={'CLEAR'}
          /> 
          </Div>
    )
}

export default ClearFilters



const Div = styled.div`
button{
    margin: 10px;
}

`;