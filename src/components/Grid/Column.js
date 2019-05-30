import React from 'react'
import Cell from './Cell'

const Column = ({ columnCells, columnIndex, insertCounter }) => {
  const handleClick = () => insertCounter(columnIndex)

  return (
    <div onClick={handleClick} className={`column column${columnIndex}`}>
      {columnCells.map((cell, index) => (
        <Cell key={index} cell={cell} />
      ))}
    </div>
  )
}

export default Column
