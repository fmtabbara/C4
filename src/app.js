import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Grid from './components/Grid/Grid'
import Players from './components/Players/Players'
import Winner from './components/WinningPlayer/WinningPlayer'
import './styles.css'

const App = () => {
  const [player, handlePlayer] = useState('red')

  const [playerWin, handlePlayerWin] = useState(false)

  const [resetGrid, handleResetGrid] = useState(false)

  const switchPlayer = player => {
    player === 'red' ? handlePlayer('yellow') : handlePlayer('red')
  }

  const reset = () => {
    handlePlayerWin(false)
    handleResetGrid(true)
  }

  const resetGame = () => handleResetGrid(false)

  const checkWin = (player, grid, x, y) => {
    const checkVertical = () =>
      grid[x][y] === grid[x][y + 1] &&
      grid[x][y] === grid[x][y + 2] &&
      grid[x][y] === grid[x][y + 3]

    const checkHorizontal = () => {
      let win = false
      for (let i = 0; i < 4; i++) {
        if (
          grid[i][y] === player &&
          grid[i + 1][y] === player &&
          grid[i + 2][y] === player &&
          grid[i + 3][y] === player
        ) {
          win = true
        }
      }
      return win
    }

    const checkDiagonalRight = () => {
      let win = false
      while (i) {}

      console.log(
        grid[0][3] === player &&
          grid[0 + 1][3 - 1] === player &&
          grid[0 + 2][3 - 2] === player &&
          grid[0 + 3][3 - 3] === player
      )
    }
    checkVertical()
      ? handlePlayerWin(player)
      : checkHorizontal()
      ? handlePlayerWin(player)
      : checkDiagonalRight()
      ? handlePlayerWin(player)
      : ''
  }
  return (
    <div className="App">
      {playerWin ? <Winner playerWin={playerWin} resetGrid={reset} /> : ''}
      <Players player={player} />
      <Grid
        switchPlayer={switchPlayer}
        player={player}
        checkWin={checkWin}
        resetGrid={resetGrid}
        resetGame={resetGame}
      />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
