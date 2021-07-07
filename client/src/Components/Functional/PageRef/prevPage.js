import React from "react";
import { getRecipes, setLoading, setPageReference } from "../../Redux/actions";
import Container from "../../Styles/buttons";

const PrevPage = ({ timer, dispatch, reference, pageReference }) => {
  const handleClick = () => {
    if (pageReference > 0) {
      dispatch(setLoading());
      dispatch(setPageReference(pageReference - 1));
      dispatch(getRecipes(reference, pageReference - 1));
      timer();
    } else {
      console.log("no previous page");
    }
  };

  return (
    <Container onClick={handleClick}>
      <h5>PREV</h5>
    </Container>
  );
};

export default PrevPage;
