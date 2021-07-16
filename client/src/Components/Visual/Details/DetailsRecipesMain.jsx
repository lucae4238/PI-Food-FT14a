import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Instruccions from "./Instruccions";
import Button from "../../Styles/buttons";
import styled from "styled-components";
import { getDetails } from "../../Redux/actions";
import Errorhandler from "../Errorhandler";
import GoHome from "../Buttons/GoHome";
import "./Details.css";
import LinkButton from "../Buttons/LinkButton";

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
  }, [id, dispatch]);

  const click = () => setBool(!bool);

  if (!details["name"]) {
    return <Errorhandler />;
  } else
    return (
      <>
        <div className={"container"}>
        <LinkButton to='/home' inner='go home' />
          <Container className={"title"}>
            <h1>{name}</h1>
          </Container>
          <div className={'diets'}>

          {
            dietsList.length === 0 ? <h4> • no diets associated</h4> : dietsList.map((i) => (<h4 > •{i}</h4>)) //prettier-ignore
          }
          </div>

          <Container className={"dishTypes"}>
            <h3>Dish types</h3>
            {
              dietsList.length === 0 ? <h4>no dish types associated</h4> : dishList.map((i) => (<div><h4>{i}</h4></div>)) //prettier-ignore
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
          {!bool && <Container className="hideshow">
            <Button onClick={click}>
            "show instructions"
            </Button>
          </Container> }

          {bool && (
            <Container className={"instructions"}>
              <Instruccions array={stepList} action={click}/>
            </Container>
          )}
        </div>
      </>
    );
};

const Container = styled.div`
  // border: 4px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    color: grey;
    margin-left: 5px;
  }
`;

export default DetailsRecipes;
