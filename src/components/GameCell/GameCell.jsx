import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { ImCross } from "react-icons/im";
import { RxCross1 } from "react-icons/rx";
import { RiCircleLine } from "react-icons/ri";
import { ModalContext } from "../../contexts/ModalContext";
import RoundOverModal from "../Modal/RoundOverModal/RoundOverModal";
import { checkForWinner } from "../../utils/GameUtils";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  const cellClickHandler = () => {
    updateBoard(index);
    const result = checkForWinner(game.board)
    if(result){
      roundComplete()
      handleModal(<RoundOverModal />)
    // updateBoard(index, () => handleModal(<RoundOverModal />));
  }
};

  if (cellItem === "x") {
    return (
      <CellStyle>
        <ImCross />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <RiCircleLine className="CircleIcon" />
      </CellStyle>
    );
  }

  return (
    <CellStyle onClick={cellClickHandler}>
      {game.turn === "x" ? (
        <RxCross1 className="IconOutline" />
      ) : (
        <RiCircleLine className="IconOutline" />
      )}
    </CellStyle>
  );
};

export default GameCell;
