import React from 'react'
import './styles.css'

const Winner = ({ playerWin, resetGrid }) => {
  return (
    <div className="winning-player-container" onClick={resetGrid}>
      <div className={`winner-${playerWin} winner-title`}>
        <span>{playerWin}</span> WINS!
      </div>
    </div>
  )
}

export default Winner
