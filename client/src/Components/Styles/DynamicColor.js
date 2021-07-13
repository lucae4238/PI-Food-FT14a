import styled from "styled-components";

const Score = styled.span`

background-color: black;
color: ${props => props.color < 33 ? 'red' : props.color > 66 ? 'green' : 'yellow'};
font-size: ${props => props.size || '13px'}
`


export default Score