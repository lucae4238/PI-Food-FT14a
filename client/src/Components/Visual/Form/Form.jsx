import React, { useState } from "react";
import styled from "styled-components";
import { postRecipe } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import useDiets from "../../Custom Hooks/useDiets";
import Button from "../../Styles/buttons";

import Input from "../../Styles/input";
import InputNum from "../Buttons/InputNum";

import "./Form.css";
import LinkButton from "../Buttons/LinkButton";
import CenterButtons from "../../Styles/centerButtons";
import Head from "../../Styles/Head";

const Form = () => {
  const dispatch = useDispatch();
  const dietsLoaded = useDiets(); //gets diets on mount
  const [done, setDone] = useState(false);
  const [danger, setDanger] = useState(false);
  let dietList = {};
  const stepModel = ["", ""];
  const initialState = {
    name: "",
    summary: "",
    score: 0,
    healthScore: 0,
    steps: ["", []],
    diets: [],
  };
  const [submission, setSubmission] = useState({ ...initialState });
  const [part, setPart] = useState(["", [[...stepModel]]]);

  dietsLoaded && dietsLoaded.forEach((diet) => {dietList[diet.name] = false;}); //prettier-ignore

  const addStep = () => {
    let step = [...part];
    step[1].push([...stepModel]);
    setPart(step);
  };

  const removeStep = () => {
    let step = [...part];
    if (step[1].length > 1) {
      step[1].pop();
    }
    setPart(step);
  };
  
  const handleInstrucctions = (e) => {
    let { value, name, id } = e.target;
    let step = [...part];
    if (name === "Title") {
      step[0] = value;
    } else {
      let num = Number(id) + 1;
      step[1][id] = [num.toString(), value];
    }
    setPart([...step]);
  };

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
    setSubmission({ ...submission, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    dietList[name] = checked;
  };

  return (
    <div>
      {done ? (
        <>
          <Head>
            <h1>Thanks for Submitting</h1>
          </Head>
          <CenterButtons>
            <Button onClick={() => setDone(false)}>
              Submit another recipe
            </Button>
            <LinkButton to="/home" inner="go home" />
          </CenterButtons>
        </>
      ) : (
        <>
          <Head>
            <h1>Submit your own recipe!</h1>
          </Head>
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
                  name="Title"
                  placeholder="insert a title!"
                  type="text"
                  value={part[0]}
                  onChange={handleInstrucctions}
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
                        onChange={handleInstrucctions}
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
        </>
      )}
    </div>
  );
};

export default Form;

const Add = styled(Button)`
  width: 8em;
  align-items: center;
  margin: 0px 10px 0px 10px;
`;

const Block = styled.div`
  padding: 12px;
  display: inline-block;
  border: ${(props) => props.theme.glassBorder};
  background: ${(props) => props.theme.glassWhite};
  position: relative;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: ${(props) => props.theme.hoverShadow};
  }
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
  resize: none;
`;
