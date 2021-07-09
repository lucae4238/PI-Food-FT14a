import React from 'react'
import { useHistory } from 'react-router';
import {  setPageReference } from "../../Redux/actions";
import Container from '../../Styles/buttons';


const NextPage = ({ dispatch, reference,pageReference}) => {
 
const history = useHistory()

  const handleClick = () => {
    if(reference === '') return console.log('no reference to search next page') ;
    dispatch(setPageReference(pageReference + 1));
    console.log(`pageReference`, pageReference)
    history.push('/home')
    window.scrollTo(0, 0)
  };

  return (
    <Container onClick={handleClick}><h5>NEXT</h5></Container>
  )
}




export default NextPage
