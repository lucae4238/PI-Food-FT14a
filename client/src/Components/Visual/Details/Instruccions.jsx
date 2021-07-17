import React from "react";
import styled from "styled-components";
import Button from "../../Styles/buttons";

const Instruccions = ({ array, action }) => {
  return (
    <Div>
      {array.map((el) =>
        el.map((el, index) =>
          index === 0 ? (
            <Container>
              <h3>{el || "instructions"}</h3>
              <Button onClick={action}> Hide</Button>
            </Container>
          ) : (
            el.map(
              (el) =>
                el[1] !== "" && (
                  <Container2>
                    <h5>
                      {el[0]} {el[1]}
                    </h5>
                  </Container2>
                )
            )
          )
        )
      )}
    </Div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 15em;
  margin-bottom: 1rem;
  align-items: center;
  span {
    font-size: 26px;
  }
`;

const Container2 = styled.div`
  border: ${(props) => props.theme.glassBorder};
  background: ${(props) => props.theme.glassTransparent};
  margin: 3px;
  min-width: 15em;
  width: 100%;
`;

const Div = styled.div`
  align-items: center;
  font-size: 20px;
`;

export default Instruccions;
