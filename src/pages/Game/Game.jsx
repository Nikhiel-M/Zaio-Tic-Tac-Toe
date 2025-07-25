import React from 'react'
import {Container} from '../../styles/General.styled'
import {GameBoardStyle} from './Game.styled'
import GameCell from '../../components/GameCell/GameCell'

const Game = () => {
  const board = [0, 1,2,3,4,5,6,7,8]
  return (
    <Container>
      <GameBoardStyle>
        {
          board.map((item, index) => (<GameCell />))
        }
      </GameBoardStyle>
    </Container>
  )
}

export default Game