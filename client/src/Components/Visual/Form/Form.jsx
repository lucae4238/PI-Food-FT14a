import React, { useState } from "react";
import styled from "styled-components";
import { postRecipe } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import useDiets from "../../Custom Hooks/useDiets";
import ThanksForSubmitting from "./Thanks";
import Button from "../../Styles/buttons";

import Input from "../../Styles/input";
import InputNum from "../Buttons/InputNum";
import LinkButton from "../Buttons/LinkButton";


const Form = () => {
  const dispatch = useDispatch();
  const dietsLoaded = useDiets(); //gets diets on mount
  const [done, setDone] = useState(false);
  const [danger, setDanger] = useState(false);
  const initialState = {
    name: "",
    summary: "",
    score: 0,
    healthScore: 0,
    steps: ["", []],
    diets: [],
  };
  const [submission, setSubmission] = useState({ ...initialState });

  const stepModel = ["", ""];

  const [part, setPart] = useState(["", [[...stepModel]]]);

  const addStep = () => {
    let step = [...part];
    step[1].push([...stepModel]);
    setPart(step);
  };

  const handleStepTitleChange = (e) => {
    let step = [...part]
    step[0] = e.target.value;
    setPart([...step])
  }

  const handleStepChange = (e) => {
    let step = [...part];
    let num = Number(e.target.id) + 1;
    step[1][e.target.id] = [num.toString(), e.target.value];
    setPart([...step]);
  };

  let dietList = {};

  dietsLoaded && dietsLoaded.forEach((diet) => {dietList[diet.name] = false;}); //prettier-ignore

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submission.name === "" || submission.summary === "")return setDanger(true); //prettier-ignore
    Object.entries(dietList).map((e) => e[1] && submission.diets.push(e[0]));
    submission.steps = [[...part]];
    await dispatch(postRecipe(submission));
    setDone(true);
    setDanger(false);
    setSubmission({ ...initialState });
    console.log(`submission`, submission);
  };

  const handleSubmissionChange = (e) => {
    if (((e.target.name === "score" || e.target.name === "healthScore") && e.target.value < 0) ||e.target.value > 100)return; //prettier-ignore
    setSubmission({ ...submission, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    dietList[name] = checked;
  };

  return (
    <Container>
       {!done && <h1>Submit your own recipe!</h1>}
      <LinkButton to='/home' inner='go home'/>
      
      {done ? (
        <>
          <ThanksForSubmitting />
          <Button onClick={() => setDone(false)}>Submit another recipe</Button>
        </>
      ) : (
        <FormContainer onSubmit={handleSubmit}>
          <Send type='submit' >Submit</Send>
          <div>
            <div>
              <Title
                danger={danger && "red"}
                type="text"
                placeholder={danger ? "title is required" : "title *"}
                name="name"
                value={submission.name}
                onChange={handleSubmissionChange}
                
              />
              <InputNum
                change={handleSubmissionChange}
                value={submission.healthScore}
                name="healthScore"
              />
              <InputNum
                change={handleSubmissionChange}
                value={submission.score}
                name="score"
              />
            </div>
            <Summary
              danger={danger && "red"}
              type="text"
              placeholder={danger ? "summary is required" : "summary *"}
              name="summary"
              value={submission.summary}
              onChange={handleSubmissionChange}
            />
          </div>
          <Div>
            {dietsLoaded.map((e, index) => (
              <Block>
                <input
                  id={index}
                  type="checkbox"
                  name={e.name}
                  value={e.name}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={index}>{e.name}</label>
              </Block>
            ))}
          </Div>
          <div>
            <h1>Instrucctions</h1>
          {part.map((el, i) =>
            i === 0 ? (
              <Title
                placeholder="insert a title!"
                type="text"
                value={el}
                onChange={handleStepTitleChange}
              />
            ) : (
              el.map((e, i) => (
                <Input
                  placeholder={`step  ${i + 1}`}
                  type="text"
                  id={i}
                  name={`step ${i}`}
                  value={e[1]}
                  onChange={handleStepChange}
                />
              ))
            )
          )}
          <Button as='div' onClick={addStep}> Add step</Button>
          </div>
        </FormContainer>
      )}
    </Container>
  );
};

export default Form;

const Div = styled.div`
  background-color: grey;
  height: 20em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: max-content;
`;

const Block = styled.div`
  border: 1px solid black;
  display: inline-block;

  vertical-align: middle;
  position: relative;
  bottom: 1px;
  label {
    vertical-align: top;
    background-color: white;
  }
`;

const Title = styled(Input)`
  font-weight: 700;
  font-size: 27px;
  width: 13em;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 27px;
  }
`;

const Summary = styled(Input)`
  width: 50em;
  padding-bottom: 130px;
`;

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;

const Container = styled.div`
  height: max-content;
`;

const Send = styled(Button)`
position: absolute;
height: 3em;

`;