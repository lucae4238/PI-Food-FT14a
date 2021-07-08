import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RecipeCard = ({ name, img, id ,diets}) => {
  return (
    <Container
      style={{
        background: `url(${img})center / cover`,
      }}
    >
      <Link to={`/recipe/${id}`}>
        <h3>{name}</h3>
      </Link>

      {
            diets.map((i) => (<h4>{i}</h4>))
            
        }
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
    position: relative;
    top: 100%;
  }

  h4 {
    background-color: pink;
  }
`;

let Img = styled.img`
  margin: 1em;
  border-radius: 1em;
  width: 20em;
  height: 15em;
`;

export default RecipeCard;
