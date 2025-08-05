import React from "react";
import { ThemeContextProvider } from "./ThemeContext";
import { GameContextProvider } from "./GameContext";
import { ModalContextProvider } from "./ModalContext";

const Provider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <GameContextProvider>
        <ModalContextProvider>
        <div>{children}</div>
        </ModalContextProvider>
      </GameContextProvider>
    </ThemeContextProvider>
  );
};

export default Provider;
