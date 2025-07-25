import { createContext, useState } from "react";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
    const [game, setGame] = useState({
        board:[1,2,3,4,5,6,7,8,9]
    })

    return(
        <GameContext.Provider value={{game}}>
            {props.children}
        </GameContext.Provider>
    )
}