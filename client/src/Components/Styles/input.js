import styled from "styled-components";
const Input = styled.input`
  outline: none;
  border-style: solid;

  border-color: ${(props) =>
    !props.color
      ? "grey"
      : props.color === 0
      ? "grey"
      : props.color < 33
      ? "red"
      : props.color > 66
      ? "green"
      : "yellow"};
  border-color: ${(props) => props.danger && "red"};

  height: 4em;
  width: 29em;
  border-radius: 1.3em;

  padding-left: 15px; 
  margin: 1em;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 17px;
    color: ${(props) => props.danger && "red"};
  }

  
`;

export default Input;
