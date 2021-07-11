import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RecipeCard = ({ name = 0, img, id, diets = [], score }) => {
  return (
    <Container
      style={{
        background: `url(${img})center / cover`,
      }}
    >
      <Link to={`/recipe/${id}`}>
        <h3>{name}</h3>
      </Link>
      <h4>{score}</h4>
      {diets.length === 0 ? <h4>no diets associated</h4> : <h4>{diets}</h4>}
    </Container>
  );
};

let Container = styled.div`
  background-repeat: repeat;
  text-align: center;
  margin: 3em;
  width: 20em;
  height: 15em;
  h3 {
    background-color: white;
  }

  h4 {
    background-color: pink;
  }
`;

export default RecipeCard;
