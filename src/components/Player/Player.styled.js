import styled from "styled-components";

export const PlayerWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10rem;
background-color: ${({isPlayerActive}) => isPlayerActive ? "yellow" : "grey" } ;
`