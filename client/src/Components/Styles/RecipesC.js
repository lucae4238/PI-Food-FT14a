import styled from "styled-components";

const Container = styled.div`
background-color: green;
height: max-content;
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
grid-template-rows: 1fr 1fr 1fr ;
overflow-y: scroll;
`;

export default Container