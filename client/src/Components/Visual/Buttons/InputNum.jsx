import React, { createRef } from "react";
import styled from "styled-components";
import Input from "../../Styles/input";

const InputNum = ({ value, change, name }) => {
  return (
    <Num
      type="number"
      name={name}
      value={value}
      color={value}
      onChange={change}
    />
  );
};

const Num = styled(Input)`
  padding: -10px -20px;
  width: 2em;
  font-size: 18px;
  height: 3em;
`;

export default InputNum;
