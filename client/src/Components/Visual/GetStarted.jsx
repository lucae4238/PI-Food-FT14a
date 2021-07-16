import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {

  return (
    <div>
      <div className="App">
        <h1>Henry Food</h1>
        <Link to="/home">
          <h4>Get Started</h4>
        </Link>
      </div>
    </div>
  );
};



export default GetStarted;
