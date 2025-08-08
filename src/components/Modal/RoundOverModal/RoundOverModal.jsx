import React from "react";
import { Title, Subtitle } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import {ButtonWrapper} from "../../Button/Button.styled";

const RoundOverModal = () => {
  return (
    <>
      <ModalHeader>
        {" "}
        <Title>NYX wins this round</Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle>NYX won this round! Choices will now be switched</Subtitle>
        <Subtitle>NYX: 1</Subtitle>
        <Subtitle>MKZ: 1</Subtitle>
      </ModalBody>
      <ModalFooter>
        <ButtonWrapper color="#f9c811" >Continue</ButtonWrapper>
        <ButtonWrapper color="#8437f9" >Restart</ButtonWrapper>
      </ModalFooter>
    </>
  );
};

export default RoundOverModal;
