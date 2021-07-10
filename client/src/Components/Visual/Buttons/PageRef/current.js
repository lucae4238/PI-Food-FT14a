import React from 'react'
import { useSelector } from "react-redux";
import Container from '../../../Styles/buttons'



const Current = () => {
  const pageReference = useSelector((state) => state.pageReference);
 
  

  return (
    <Container ><h5>{pageReference}</h5></Container>
  )
}




export default Current
