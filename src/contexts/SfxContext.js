import { createContext } from "react";
import useSound from "../hooks/useSound";

export const SfxContext = createContext({});

export const SfxContextProvider = ({ children }) => {
  const options = { 
    volume: 0.1,
    // timeout: 200
   };

  const hoverPath = require("../assets/Audio/computer-mouse-click.mp3");
  const clickPath = require("../assets/Audio/90s-game-ui.mp3");
  const winPath = require("../assets/Audio/mixkit-small-win.wav")
  const drawPath = require("../assets/Audio/round-draw.wav")

  const hoverSfx = useSound(hoverPath, options );
  const clickSfx = useSound(clickPath, options);
  const winSfx = useSound(winPath, options);
  const drawSfx = useSound(drawPath, options);

  return (
    <SfxContext.Provider value={{ hoverSfx, clickSfx, winSfx, drawSfx }}>{children}</SfxContext.Provider>
  );
};
