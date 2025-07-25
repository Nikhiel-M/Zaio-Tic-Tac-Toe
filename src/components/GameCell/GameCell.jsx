import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard } = useContext(GameContext);
  return (
    <CellStyle
      onClick={() => {
        console.log(cellItem, index);
        updateBoard(index)
      }}
    >
      {cellItem}
    </CellStyle>
  );
};

export default GameCell;
