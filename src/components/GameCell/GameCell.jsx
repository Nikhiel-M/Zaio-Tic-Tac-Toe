import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import { ImCross } from "react-icons/im";
import { RxCross1 } from "react-icons/rx";
import { RiCircleLine } from "react-icons/ri";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game } = useContext(GameContext);

  const cellClickHandler = () => {
    updateBoard(index);
    checkForWinner(game.board);
  };

  if (cellItem === "x") {
    return (
      <CellStyle>
        {" "}
        <ImCross />{" "}
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        {" "}
        <RiCircleLine className="CircleIcon"/>{" "}
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
