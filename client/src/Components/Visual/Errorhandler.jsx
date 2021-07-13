import React from "react";

import LinkButton from './Buttons/LinkButton'

const Errorhandler = () => {
  return (
    <>
      <h1>Sorry, we couldn't find the page you were looking for :(</h1>
      <LinkButton to='/home' inner={'go back'}/>


    </>
  );
};

export default Errorhandler;
