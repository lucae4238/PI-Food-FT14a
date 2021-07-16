import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Container from "../../../Styles/buttons";
import PageButton from "../TemplateButton";
import { setPageReference } from '../../../Redux/actions';


const Pagehandler = () => {
  const pageReference = useSelector((state) => state.pageReference);
  const recipes = useSelector((state) => state.recipesLoaded);


  if (recipes.length > 1) {
    return (
      <Div>
        {pageReference < 1 ? (
          <Container>No prev</Container>
        ) : (
          // <PrevPage

          //   dispatch={dispatch}
          //   reference={reference}
          //   pageReference={pageReference}
          // />
          <PageButton
          inner={'Prev'}
          action={setPageReference}
          arg={pageReference - 1}
         />


        )}
        <PageButton 
        inner={pageReference}
        action={setPageReference}
        arg={0}
        />

        {!((pageReference * 9) + 9 > recipes.length) && (
          <PageButton
         inner={'Next'}
         action={setPageReference}
         arg={pageReference + 1}
        />
        )}
      </Div>
    );
  } else {
    return null;
  }
};

const Div = styled.div`
// background-color: yellow;
display: flex;
justify-content: space-around;
margin: 0;
padding: 10px;
height: 3em;
width: 25em;
// background-color: red;

vertical-align: center;
margin-left: auto;
margin-right: auto;

`;

export default Pagehandler;
