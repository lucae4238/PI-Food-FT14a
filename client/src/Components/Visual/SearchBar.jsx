import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, setLoading } from "../Redux/actions";


 const SearchBar=()=> {
  const recipes = useSelector((state) => state.recipesLoaded);
  
  const dispatch = useDispatch();
  const [input, setInput] = useState('')

  const timer =  () => setTimeout(() => dispatch(setLoading()), 2000)
  
  const handleInput = (e) => {
      setInput(e.target.value);
  };
 
  const handleSubmit = (e) => {
      e.preventDefault();
      if(input !== ''){
          dispatch(setLoading())
          dispatch(getRecipes(input))
          setInput('')
        timer()
          console.log(`recipes`, recipes)
      } 

  }
  
  
  
    return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Search type="text" placeholder="LARGO de busqueda" name='input' onChange={handleInput} value={input}/>
        <Hidden type="submit" tabindex="-1" />
      </form>
    </Container>
  );
}

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
position: absolute; left: -9999px; width: 1px; height: 1px
`;

export default SearchBar;
