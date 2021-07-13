import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DynamicColor from "../../../Styles/DynamicColor";

const RecipeCard = ({ name = 0, img, id, diets = [], score }) => {
  return (
    <Container
      style={{
        background: `url(${img})center / cover`,
      }}
    >
      <Link to={`/recipe/${id}`}>


      <Div>
      <DynamicColor color={score} size='25px'>{score}</DynamicColor>

      {diets.length === 0 ? <h4>no diets associated</h4> : <h4>{diets}</h4>}
      </Div>
        <h3>{name}</h3>
      </Link>
    </Container>
  );
};






let Container = styled.div`
a{
  text-decoration: none;
}
  background-repeat: repeat;
  text-align: center;
  margin: 3em;
  min-width: 20em;
  min-height: 15em;
  max-height: 16em;
  border-radius: 13px;
  h3 {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background: papayawhip;
    color: palevioletred;
    position: relative;
    border-radius: 0 0 13px 13px;
    top: 44%;
    min-height: 3em;
    }
  }

`;


const Div = styled.div`
background: papayawhip;
visibility: hidden;

a{
  text-decoration: none;
}

${Container}:hover & {
  visibility: visible;
}

`;


export default RecipeCard;
