import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Instruccions from "./Instruccions";
import Button from "../../Styles/buttons";
import styled from "styled-components";
import { getDetails } from "../../Redux/actions";
import Errorhandler from "../Errorhandler";
import GoHome from "../Buttons/GoHome";
import ContainerButton from "../../Styles/buttons";
import './Details.css'

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

  useEffect(
    () => {
      dispatch(getDetails(id));
    },
    [id, dispatch],
    [dispatch]
  );

  const click = () => setBool(!bool);

  if (!details["name"]) {
    return <Errorhandler />;
  } else
    return (
      <>
        <GoHome top={"3%"} />
        <div className={'container'}>
          <Container className={"title"}>
            <h1>{name}</h1>
            {
              dietsList.length === 0 ? <h4>no diets associated</h4> : dietsList.map((i) => (<h4 > •{i}</h4>)) //prettier-ignore
            }
          </Container>

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
            <h6 dangerouslySetInnerHTML={{ __html: summary }} />
          </Container>

          <Container className={"img"}>
            <img src={image} alt={"recipe"} />
          </Container>
          <Container className={"instructions"}>
            {bool === false ? (
              <Button onClick={click}>show instructions</Button>
            ) : (
              <>
                <Instruccions array={stepList} />
                <Button onClick={click}>hide instructions</Button>
              </>
            )}
          </Container>
        </div>
      </>
    );
};

const Container = styled.div`
  border: 4px solid red;
  display: flex;
  align-items: center;
  h4 {
    color: grey;
    margin-left: 5px;
  }
`;

const Div = styled.div`
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // grid-template-rows: 1fr;

  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 3fr 1fr 3fr;
  grid-template-areas:
    "title title"
    "summary img"
    "dishTypes score"
    "instructions instructions";
  grid-gap: 0.2rem;

.title{
  grid-area: title
}

.summary{
  background: red;
  grid-area: summary;
}

.img{
  background: purple;
  grid-area: img;
}

.dishTypes{
  background: blue;
  grid-area: dishTypes;
}

.score{
  background: #add8e6;
  grid-area: score;
}

.instructions{
   background: yellow;
  grid-area: instructions
}

`;

export default DetailsRecipes;
