import React, { useState, useEffect } from 'react'
import Column from './Column'
import './styles.css'

const Grid = ({ switchPlayer, player, checkWin, resetGrid, resetGame }) => {
  const [grid, handleGridChange] = useState([])

  useEffect(() => {
    const columns = Array(7).fill()
    const newGrid = columns.map(column => Array(6).fill(undefined))
    handleGridChange(newGrid)
    resetGame()
  }, [resetGrid])

  const updateGrid = (newGrid, player, columnIndex, findEmptySlot) => {
    handleGridChange(newGrid)
    checkWin(player, newGrid, columnIndex, findEmptySlot, switchPlayer(player))
  }

  const insertCounter = columnIndex => {
    const findEmptySlot = grid[columnIndex].lastIndexOf(undefined)
    const newGrid = grid
    newGrid[columnIndex][findEmptySlot] = player
    updateGrid(newGrid, player, columnIndex, findEmptySlot)
  }

  return (
    <div className="grid-wrapper">
      {grid.map((column, index) => (
        <Column
          key={index}
          insertCounter={insertCounter}
          columnCells={column}
          columnIndex={index}
        />
      ))}
    </div>
  )
}

export default Grid
