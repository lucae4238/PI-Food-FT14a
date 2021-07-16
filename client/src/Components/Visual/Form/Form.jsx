import React, { useState } from "react";
import styled from "styled-components";
import { postRecipe } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import useDiets from "../../Custom Hooks/useDiets";
import ThanksForSubmitting from "./Thanks";
import Button from "../../Styles/buttons";

import Input from "../../Styles/input";
import InputNum from "../Buttons/InputNum";

import "./Form.css";
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

  const removeStep = () => {
    console.log('entre')
    let step = [...part];
    console.log(`step[1].length`, step[1].length)
    if (step[1].length > 1) {
      step[1].pop();
    }
    setPart(step);
  };

  const handleStepTitleChange = (e) => {
    let step = [...part];
    step[0] = e.target.value;
    setPart([...step]);
  };

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
    setPart(["", [[...stepModel]]]);
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
    <div>
      {/* <GoHome top={"3%"} /> */}
      <div className='head'>{!done && <h1>Submit your own recipe!</h1>}</div>
      {done && (
        <>
          <ThanksForSubmitting />
          <Button onClick={() => setDone(false)}>Submit another recipe</Button>
        </>
      )}

      {!done && (
        <form className="containerForm" onSubmit={handleSubmit}>
          <div className="buttonarea">
            <Button type="submit">Submit</Button>
            <LinkButton to="/home" inner="go home" />
          </div>
          <div className="infoInput">
            <div className="top">
              <Title
                danger={danger && "red"}
                type="text"
                placeholder={danger ? "A title is required" : "Title *"}
                name="name"
                value={submission.name}
                onChange={handleSubmissionChange}
              />
              <div className="buttoninfo">
                <label>healthScore</label>
                <InputNum
                  change={handleSubmissionChange}
                  value={submission.healthScore}
                  name="healthScore"
                />
              </div>
              <div className="buttoninfo">
                <label>score</label>
                <InputNum
                  change={handleSubmissionChange}
                  value={submission.score}
                  name="score"
                />
              </div>
            </div>
            <div className="summarybox">
              <Summary
                as="textarea"
                danger={danger && "red"}
                type="text"
                placeholder={danger ? "A summary is required" : "Summary *"}
                name="summary"
                value={submission.summary}
                onChange={handleSubmissionChange}
              />
            </div>
          </div>
          <div className="dietsInput">
            {dietsLoaded.map((e, index) => (
              <Block key={index}>
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
          </div>
          <div className="instructionsInput">
            <h1 className="header">Instrucctions</h1>
            <div className="insertTitle">
              <Title
                placeholder="insert a title!"
                type="text"
                value={part[0]}
                onChange={handleStepTitleChange}
              />
            </div>

            <div className="insertSteps">
              {part.map(
                (el, i) =>
                  i !== 0 &&
                  el.map((e, i) => (
                    <Input
                      key={i}
                      placeholder={`step  ${i + 1}`}
                      type="text"
                      id={i}
                      name={`step ${i}`}
                      value={e[1]}
                      onChange={handleStepChange}
                    />
                  ))
              )}
            </div>
            <div className="addStep">
              <Add as="div" onClick={addStep}> 
                Add Step
              </Add>
              <Add as="div" onClick={removeStep}>
                Remove Step
              </Add>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;

const Add = styled(Button)`
  width: 8em;
  align-items: center;
  margin: 10px 10px 0px 10px;
`;

const Block = styled.div`
  padding: 12px;
  display: inline-block;
  border: ${(props) => props.theme.glassBorder};
  background: ${(props) => props.theme.glassWhite};

  &:hover {
    box-shadow: ${(props) => props.theme.hoverShadow};
  }

  position: relative;
  transition: box-shadow 0.2s ease;

  label {
    color: black;
    margin-right: 2em;
  }
`;

const Title = styled(Input)`
  font-weight: 700;
  font-size: 27px;
  width: 24rem;
  margin-left: 13px;

  ::placeholder {
    font-size: 27px;
  }
`;

const Summary = styled(Input)`
  width: 670px;
  height: 175px;
  padding-bottom: 130px;
  font-family: "Helvetica Neue", serif;
  margin-bottom: 0;
`;
