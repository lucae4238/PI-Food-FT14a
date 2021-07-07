import React from 'react'
import { getRecipes, setLoading, setPageReference } from "../../Redux/actions";
import Container from '../../Styles/buttons';


const NextPage = ({timer, dispatch, reference,pageReference}) => {
 


  const handleClick = () => {
    if(reference === '') return console.log('no reference to search next page') ;
    dispatch(setLoading());
    dispatch(setPageReference(pageReference + 1));
    dispatch(getRecipes(reference, (pageReference + 1)));
    timer();
  };

  return (
    <Container onClick={handleClick}><h5>NEXT</h5></Container>
  )
}




export default NextPage
