import React, { useState } from "react";
import ReactDOM from "react-dom";
import Grid from "./components/Grid/Grid";
import Players from "./components/Players/Players";
import Winner from "./components/WinningPlayer/WinningPlayer";
import "./styles.css";

const App = () => {
  const [player, handlePlayer] = useState("red");

  const [playerWin, handlePlayerWin] = useState(false);

  const [resetGrid, handleResetGrid] = useState(false);

  const switchPlayer = player => {
    player === "red" ? handlePlayer("yellow") : handlePlayer("red");
  };

  const reset = () => {
    handlePlayerWin(false);
    handleResetGrid(true);
  };

  const resetGame = () => handleResetGrid(false);

  const checkWin = (player, grid, x, y) => {
    const checkVertical = () =>
      grid[x][y + 1] === player &&
      grid[x][y + 2] === player &&
      grid[x][y + 3] === player;

    const checkHorizontal = () => {
      let win = false;
      for (let i = 0; i < 4; i++) {
        if (
          grid[i][y] === player &&
          grid[i + 1][y] === player &&
          grid[i + 2][y] === player &&
          grid[i + 3][y] === player
        ) {
          win = true;
        }
      }
      return win;
    };

    const checkDiagonalRight = () => {
      let win = false;
      for (let i = 5; i > 2; i--) {
        for (let j = 0; j < 4; j++) {
          if (
            grid[j][i] === player &&
            grid[j + 1][i - 1] === player &&
            grid[j + 2][i - 2] === player &&
            grid[j + 3][i - 3] === player
          ) {
            win = true;
          }
        }
      }
      return win;
    };

    const checkDiagonalLeft = () => {
      let win = false;
      for (let i = 5; i > 2; i--) {
        for (let j = 6; j > 2; j--) {
          if (
            grid[j][i] === player &&
            grid[j - 1][i - 1] === player &&
            grid[j - 2][i - 2] === player &&
            grid[j - 3][i - 3] === player
          ) {
            win = true;
          }
        }
      }
      return win;
    };

    checkVertical()
      ? handlePlayerWin(player)
      : checkHorizontal()
      ? handlePlayerWin(player)
      : checkDiagonalRight()
      ? handlePlayerWin(player)
      : checkDiagonalLeft()
      ? handlePlayerWin(player)
      : "";
  };
  return (
    <div className="App">
      {playerWin ? <Winner playerWin={playerWin} resetGrid={reset} /> : ""}
      <Players player={player} />
      <Grid
        switchPlayer={switchPlayer}
        player={player}
        checkWin={checkWin}
        resetGrid={resetGrid}
        resetGame={resetGame}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
