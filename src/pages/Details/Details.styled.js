import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 1rem 1rem 1rem;

`;

export const NameInput = styled.input`
  width: 70%;
  padding: 12px 20px;
  margin: 1rem 1.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 50px;
  font-family: "popins", sans-serif;
  color: ${(props) => props.theme.colors.text};
  font-size: 1.2rem
`;

export const AvatarsDisplay = styled.div`
  width: 30rem;
  height: 17rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  cursor: pointer;
  
`;


export const AvatarsContainer = styled.div`
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const StyledAvatar = styled.div`
  width: 100%;
  height: 100%;

  .avatars {
    cursor: pointer;
    width: 100%;
    height: 100%;
    overflow: hidden;

  } 
  :hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;

  }
`;

export const PlayerChoice = styled.div`
  width: 8rem;
  height: 8rem;

    .avatars {
    cursor: pointer;
    width: 100%;
    height: 100%;
    overflow: hidden;
  } 
`