import React from "react";
import { Container } from "./Home.styled";
import { Title, Subtitle } from "../../styles/General.styled";

function Home() {
  return (
    <Container>
      <Title>Tic Tac Toe</Title>
      <Subtitle> Play with your friends, higher score wins!</Subtitle>
    </Container>
  );
}

export default Home;
