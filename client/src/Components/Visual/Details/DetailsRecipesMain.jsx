import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Instruccions from "./Instruccions";
import Button from "../../Styles/buttons";
import styled from "styled-components";
import { getDetails } from "../../Redux/actions";
import Errorhandler from "../Errorhandler";
import GoHome from "../Buttons/GoHome";
import "./Details.css";
import Loading from "../Home/Loading";

const DetailsRecipes = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const details = useSelector((state) => state.recipeDetails);
  const { name, summary, score, healthScore, diets, dishTypes, image, steps } = details; //prettier-ignore

  const [bool, setBool] = useState(false);
  const click = () => setBool(!bool);

  useEffect(() => {
    dispatch(getDetails(id));
  }, [id, dispatch]);

  if (name && summary && diets && image && steps) {
    return (
      <>

        <GoHome top="2%" inner="go home" />
        <div className={"container"}>
          <Container className={"title"}>
            <h1>{name}</h1>
            {
              diets ? diets.map((i,index) => (<h4  key={index}> •{i}</h4>)) : <h4> • no diets associated</h4> //prettier-ignore
            }
          </Container>

          <Container className={"dishTypes"}>
            <h3>Dish types: </h3>
            {
              dishTypes ? dishTypes
              .map((i,index) => (<div key={index}><h4>{i} •</h4></div>)): <h4>no dish types associated</h4> //prettier-ignore
            }
          </Container>
          <Container className={"score"}>
            <h4>Health score: {healthScore}</h4>
            <h4>user score: {score}</h4>
          </Container>
          <Container className={"summary"}>
            <h3>{summary}</h3>
          </Container>

          <Container className={"img"}>
            <img src={image} alt={"recipe"} />
          </Container>
          {!bool && steps[0][1][0][0] !== '' && (
            <Container className="hideshow">
              <Button onClick={click}>show instructions</Button>
            </Container>
          )}

          {bool && steps[0][1][0][0] !== '' && (
            <Container className={"instructions"}>
              <Instruccions array={steps} action={click} />
            </Container>
          )}
        </div>
      </>
    );
  } else if (details["message"]) {
    return <Errorhandler />;
  } else return <Loading />;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    margin-left: 10px;
  }
`;

export default DetailsRecipes;
