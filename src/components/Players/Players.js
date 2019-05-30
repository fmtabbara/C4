import React, { useState } from 'react'
import classNames from 'classnames'
import './styles.css'

const Players = ({ player }) => {
  return (
    <div className="players-container">
      <h2>Red</h2>
      <span
        className={classNames(
          { activePlayer: player === 'red' },
          'counter',
          'counter-red'
        )}
      />
      <h2>Yellow</h2>
      <span
        className={classNames(
          { activePlayer: player === 'yellow' },
          'counter',
          'counter-yellow'
        )}
      />
    </div>
  )
}

export default Players
