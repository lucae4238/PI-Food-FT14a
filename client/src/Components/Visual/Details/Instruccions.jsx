import React from "react";
import styled from "styled-components";

const Instruccions = ({ array }) => {

  return (
    <div>
      {array.map((i) => (
        <Container>
          {i["name"] !== "" && i["name"] ? (
            <h4>{i["name"]}</h4>
          ) : (
            <h4>Instruccions</h4>
          )}
          {i.steps.map((s) => (
            <Container2>
              <h5>Number {s["number"]}</h5>
              <h5>{s["step"]}</h5>
            </Container2>
          ))}
        </Container>
      ))}
    </div>
  );
};

const Container = styled.div`
  border: 4px solid black;
`;

const Container2 = styled.div`
  border: 4px solid red;
`;

export default Instruccions;
