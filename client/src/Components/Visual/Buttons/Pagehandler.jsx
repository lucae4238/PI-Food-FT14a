import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Current from "../../Functional/PageRef/current";
import NextPage from "../../Functional/PageRef/nextPage";
import PrevPage from "../../Functional/PageRef/prevPage";
import { setLoading } from "../../Redux/actions";
import Container from "../../Styles/buttons";


const Pagehandler = () => {
  const pageReference = useSelector((state) => state.pageReference);
  const reference = useSelector((state) => state.reference);
  const dispatch = useDispatch();

  let timer = () => setTimeout(() => dispatch(setLoading()), 2000);
  if (reference !== "") {
    return (
      <>
        {pageReference < 1 ? (
          <Container>No prev</Container>
        ) : (
          <PrevPage
            timer={timer}
            dispatch={dispatch}
            reference={reference}
            pageReference={pageReference}
          />
        )}
        <Current />
        {pageReference > 9 ? (
          <></>
        ) : (
          <NextPage
            timer={timer}
            dispatch={dispatch}
            reference={reference}
            pageReference={pageReference}
          />
        )}
      </>
    );
  } else {
    return <></>;
  }
};

export default Pagehandler;
