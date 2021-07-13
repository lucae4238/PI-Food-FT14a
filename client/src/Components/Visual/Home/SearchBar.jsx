import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getRecipes,
  getTypes,
  setLoading,
  setPageReference,
  setReference,
} from "../../Redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input !== "") {
      dispatch(setLoading());
      await dispatch(getRecipes(input));
      dispatch(setReference(input));
      dispatch(setPageReference(0));
      dispatch(getTypes());
      setInput("");
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Search
          type="text"
          placeholder="Search recipes"
          name="input"
          onChange={handleInput}
          value={input}
        />
        <Hidden type="submit" tabindex="-1" />
      </form>
    </Container>
  );
};

let Container = styled.div`
  display: flex;
  justify-content: center;
  form {
    width: 20%;
  }
`;

let Search = styled.input`
  width: 100%;
  height: 3em;
`;

let Hidden = styled.input`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
`;

export default SearchBar;
