import React from "react";
import { ThemeContextProvider } from "./ThemeContext";
import { GameContextProvider } from "./GameContext";

const Provider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <GameContextProvider>
        <div>{children}</div>
      </GameContextProvider>
    </ThemeContextProvider>
  );
};

export default Provider;
