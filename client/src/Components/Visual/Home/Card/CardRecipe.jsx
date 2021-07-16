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
        <h3>{name}</h3>
        <More>

          <DynamicColor color={score} size="25px">
            {score}
          </DynamicColor>

          {diets.length === 0 ? <h4>no diets associated</h4> : <h4>{diets}</h4>}
        </More>
        </Div>
      </Link>
    </Container>
  );
};

const More = styled.div`

display: flex;
`;

let Container = styled.div`
overflow: hidden;

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
  
  transition: box-shadow 0.4s ease;
  &:hover {
    box-shadow: 0px 0px 49px 5px rgba(0, 0, 0, 0.3);
  }
`;

const Div = styled.div`
  background: rgba(255, 255, 255, 0.95);
position: relative;
top: 74%;
color: palevioletred;
color: black;

display: grid;
grid-template-columns: 1fr;
grid-template-rows: 0.5fr 2fr;
grid-template-areas: 
"name"
"extra";

transition: all 0.5s;
  a {
    text-decoration: none;
  }

  ${Container}:hover & {
    transform: translateY(-40%)
  };

  span{
    // background-color: rgb(215,215,215);
    // background-color:palevioletred;
    padding: 0.5rem;
    border-radius: 2rem;
    height: max-content;
    margin: 1rem;
    // color: black;
  }


padding: 0;

  h3{
    // color: palevioletred;
    grid-area: name;
    margin: 10px;
    margin-bottom:0;
    align-items: center;
    padding: 5px 10px;
    min-height: 3em;
  }

  div{
  grid-area: extra;
  }
height: 13rem;



`;

export default RecipeCard;
