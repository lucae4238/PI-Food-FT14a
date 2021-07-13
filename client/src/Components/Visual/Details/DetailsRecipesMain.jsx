import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Instruccions from "./Instruccions";
import Button from "../../Styles/buttons";
import styled from "styled-components";
import { getDetails } from "../../Redux/actions";

const DetailsRecipes = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const details = useSelector((state) => state.recipeDetails);
  const { name, summary, score, healthScore, diets, dishTypes, image, steps } =
    details;

  const [bool, setBool] = useState(false);

  let dietsList = diets ? diets : [];
  let dishList = dishTypes ? dishTypes : [];
  let stepList = steps ? steps : [];


  useEffect(() => {
    dispatch(getDetails(id));
    
  }, [ id, dispatch], [dispatch]);

  const click = () => setBool(!bool);

  return (
    <>
      <Container>
      <h1>{name}</h1>
        {dietsList.map((i) => (
          <h4 > •{i}</h4>
        ))}
      </Container>
      <div>
        <img src={image} alt={"recipe"} />
        <Container>
          <h3>DishTypes</h3>
          {dishList.map((i) => (
            <div>
              <h4>{i}</h4>
            </div>
          ))}
        </Container>
        <Container>
          <h4>Health score: {healthScore}</h4>
          <h4>user score: {score}</h4>
        </Container>
        <h6 dangerouslySetInnerHTML={{ __html: summary }} />
        {bool === false ? (
          <Button onClick={click}>show instructions</Button>
        ) : (
          <>
            <Instruccions array={stepList} />
            <Button onClick={click}>hide instructions</Button>
          </>
        )}
      </div>
    </>
  );
};

const Container = styled.div`
  border: 4px solid red;
  display: flex;
  align-items: center;
  h4{
    color: grey;
    margin-left: 5px;
  }
`;

export default DetailsRecipes;
