import React from 'react'
import { CellStyle } from './GameCell.styled'

const GameCell = ({cellItem}) => {
  return (
    <CellStyle>
        {cellItem}
    </CellStyle>
  )
}

export default GameCell