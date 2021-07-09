import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Current from "../../Functional/PageRef/current";
import NextPage from "../../Functional/PageRef/nextPage";
import PrevPage from "../../Functional/PageRef/prevPage";
import Container from "../../Styles/buttons";


const Pagehandler = () => {
  const pageReference = useSelector((state) => state.pageReference);
  const reference = useSelector((state) => state.reference);
  const recipes = useSelector((state) => state.recipesLoaded);
  const dispatch = useDispatch();


  if (recipes.length > 1) {
    return (
      <Div>
        {pageReference < 1 ? (
          <Container>No prev</Container>
        ) : (
          <PrevPage

            dispatch={dispatch}
            reference={reference}
            pageReference={pageReference}
          />
        )}
        <Current />
        {(pageReference * 9) + 9 > recipes.length ? (
          <></>
        ) : (
          <NextPage

            dispatch={dispatch}
            reference={reference}
            pageReference={pageReference}
          />
        )}
      </Div>
    );
  } else {
    return <></>;
  }
};

const Div = styled.div`
background-color: yellow;
display: flex;
justify-content: space-around;
margin: 0;
padding: 10px;
height: 3em;
width: 25em;
`;

export default Pagehandler;
