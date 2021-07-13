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


      <Div>
      <DynamicColor color={score} size='25px'>{score}</DynamicColor>

      {diets.length === 0 ? <h4>no diets associated</h4> : <h4>{diets}</h4>}
      </Div>
      <Link to={`/recipe/${id}`}>
        <h3>{name}</h3>
      </Link>
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
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background: papayawhip;
    color: palevioletred;
    text-decoration: none;
    }
  }

  h4 {
    
  }
`;


const Div = styled.div`
background: papayawhip;
visibility: hidden;

${Container}:hover & {
  visibility: visible;
}

`;


export default RecipeCard;
