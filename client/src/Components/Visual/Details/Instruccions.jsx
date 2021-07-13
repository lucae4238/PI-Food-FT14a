import React from "react";
import styled from "styled-components";

const Instruccions = ({ array }) => {
  return (
    <div>
      {array.map((el) =>
        el.map((el, index) =>
          index === 0 ? (
            el === "" ? (
            <Container>

              <h3>instructions</h3>
            </Container>
            ) : (
              <Container>

                <h3>{el}</h3>
              </Container>
            )
          ) : (
            el.map((el) => (
              <Container2>
                <h5>
                  {" "}
                  {el[0]} {el[1]}
                </h5>
              </Container2>
            ))
          )
        )
      )}
    </div>
  );
};

const Container = styled.div`
  border: 4px solid black;
`;

const Container2 = styled.div`
  border: 4px solid red;
  margin 3px;
`;

export default Instruccions;
