import React, { useContext } from "react";
import { Title, Subtitle } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import { ButtonWrapper } from "../../Button/Button.styled";
import { GameContext } from "../../../contexts/GameContext";
import { ModalContext } from "../../../contexts/ModalContext";
import { SfxContext } from "../../../contexts/SfxContext";
import { useNavigate } from "react-router-dom";

const RoundOverModal = () => {
  const { hoverSfx, clickSfx } = useContext(SfxContext);
  const { resetBoard, game, restartGame } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  const navigate = useNavigate();
  return (
    <>
      <ModalHeader>
        {" "}
        <Title $primary>
          {" "}
          {game.roundWinner
            ? ` ${game.roundWinner.name} wins round`
            : "Round drawn"}
        </Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle $primary>Choices will now be switched</Subtitle>
        <Subtitle $primary>
          {game.player1.name}: {game.player1.score}{" "}
        </Subtitle>
        <Subtitle $primary>
          {game.player2.name}: {game.player2.score}{" "}
        </Subtitle>
      </ModalBody>
      <ModalFooter>
        <ButtonWrapper
          color="#f9c811"
          onClick={() => {
            clickSfx();
            handleModal();
            resetBoard();
          }}
          onMouseEnter={() => hoverSfx()}
        >
          Continue
        </ButtonWrapper>
        <ButtonWrapper
          color="#8437f9"
          onClick={() => {
            clickSfx();
            restartGame();
            handleModal();
            navigate("/");
          }}
          onMouseEnter={() => hoverSfx()}
        >
          Restart
        </ButtonWrapper>
      </ModalFooter>
    </>
  );
};

export default RoundOverModal;
