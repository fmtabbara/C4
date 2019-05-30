import React, { useState } from 'react'

const Cell = ({ cell }) => {
  const [cellState, handleCellState] = useState(undefined)
  let cellClass

  if (cell === 'red') {
    cellClass = 'red-cell'
  } else if (cell === 'yellow') {
    cellClass = 'yellow-cell'
  } else {
    cellClass = 'empty-cell'
  }
  const handleClick = () => {
    if (!cellState) {
      handleCellState(cell)
    }
  }

  return <div onClick={handleClick} className={`${cellClass} cell`} />
}

export default Cell
