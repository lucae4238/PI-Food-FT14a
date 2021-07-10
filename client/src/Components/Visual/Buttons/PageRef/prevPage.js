import React from "react";
import { useHistory } from "react-router";
import { setPageReference } from "../../../Redux/actions";
import Container from "../../../Styles/buttons";


const PrevPage = ({ dispatch, reference, pageReference }) => {
  const history = useHistory()
  const handleClick = () => {
    if (pageReference > 0) {
      dispatch(setPageReference(pageReference - 1));
      console.log(`pageReference`, pageReference)
      history.push('/home')
      window.scrollTo(0, 0)
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
