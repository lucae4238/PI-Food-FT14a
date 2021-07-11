import React from 'react'
import { clearFilters } from '../../../Redux/actions'
import Button from '../TemplateButton'


const ClearFilters = () => {
    return (
        <Button 
          action={clearFilters}
          inner={'CLEAR'}
          /> 
    )
}

export default ClearFilters
