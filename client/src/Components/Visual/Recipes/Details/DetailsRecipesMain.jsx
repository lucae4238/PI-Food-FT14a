import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../../Redux/actions";
import Instruccions from "./Instruccions";
import Button from '../../../Styles/buttons'
import styled from "styled-components";

const DetailsRecipes = (props) => {
  const id = props.match.params.id;
  const details = useSelector((state) => state.recipeDetails);
  const dispatch = useDispatch();
  const { name, summary, score, healthScore, diets, dishTypes, image, steps } =
    details;

  const [bool, setBool] = useState(false);

  let dietsList = diets ? diets : [];
  let dishList = dishTypes ? dishTypes : [];
  let stepList = steps ? steps : [];

  let stepsFormated = [];
  stepList.map((item) => {
    let nested = [];

    item.steps.map((step) =>
      nested.push({ step: step.step, number: step.number })
    );

    let big = { name: item.name, steps: nested };
    stepsFormated.push(big);
    return;
  });

  useEffect(() => {
    dispatch(getDetails(id));
  }, [id, dispatch]);

  const click = () => setBool(!bool);

  return (
    <>
      <h1>{name}</h1>
      <Container>

      {dietsList.map((i) => (
        <h4 key={i.id}>{i["name"]}</h4>
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
        <p>{summary}</p>
        {bool === false ? (
          <Button onClick={click}>show instruccions</Button>
        ) : (
          <>
            <Instruccions array={stepsFormated} />
            <Button onClick={click}>hide instruccions</Button>
          </>
        )}
      </div>
    </>
  );
};

const Container = styled.div`
  border: 4px solid red;
`;

export default DetailsRecipes;

