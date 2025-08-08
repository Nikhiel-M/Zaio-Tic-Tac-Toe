import React, { useContext } from "react";
import { Title, Subtitle } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import { ButtonWrapper } from "../../Button/Button.styled";
import { GameContext } from "../../../contexts/GameContext";
import { ModalContext }from "../../../contexts/ModalContext"

const RoundOverModal = () => {
  const { resetBoard } = useContext(GameContext)
  const {handleModal } = useContext(ModalContext);
  return (
    <>
      <ModalHeader>
        {" "}
        <Title primary >NYX wins this round</Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle primary >NYX won this round! Choices will now be switched</Subtitle>
        <Subtitle primary >NYX: 1</Subtitle>
        <Subtitle primary >MKZ: 1</Subtitle>
      </ModalBody>
      <ModalFooter>
        <ButtonWrapper
          color="#f9c811"
          onClick={() => {
            handleModal();
            resetBoard()
          }}
        >
          Continue
        </ButtonWrapper>
        <ButtonWrapper color="#8437f9">Restart</ButtonWrapper>
      </ModalFooter>
    </>
  );
};

export default RoundOverModal;
