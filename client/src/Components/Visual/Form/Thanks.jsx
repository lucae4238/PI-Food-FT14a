import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Styles/buttons";

const ThanksforSubmitting = () => {
  return (
    <>
      <h1>Thanks for submitting :D</h1>
      <Link to="/home">
        <Button>Go home</Button>
      </Link>
    </>
  );
};

export default ThanksforSubmitting;