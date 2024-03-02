import Board from './Components/Board';
import StatusMessage from './Components/StatusMessage';
import { useState } from 'react';
import './style.scss';
import { calculateWinner } from './Components/calculateWinner';
import History from './Components/History';
const NEWGAME = [{ square: Array(9).fill(null), isNext: false }];
function App() {
  const [history, setHistory] = useState(NEWGAME);
  const [currentMove, setCurrentMove] = useState(0);
  const gameBoard = history[currentMove];
  const { winningsquares, winner } = calculateWinner(gameBoard.square);
  const handleSquareClick = clickedposition => {
    if (gameBoard.square[clickedposition] || winner) {
      return;
    }

    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;

      const latestGamestate = isTraversing
        ? currentHistory[currentMove]
        : currentHistory[history.length - 1];

      const nextGameState = latestGamestate.square.map(
        (squareValue, position) => {
          if (clickedposition === position) {
            return latestGamestate.isNext ? 'X' : 'O';
          }

          return squareValue;
        }
      );
      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(latestGamestate) + 1)
        : currentHistory;
      return base.concat({
        square: nextGameState,
        isNext: !latestGamestate.isNext,
      });
    });
    setCurrentMove(move => move + 1);
  };
  const moveTo = move => {
    setCurrentMove(move);
  };
  const NewGameStart = () => {
    setHistory(NEWGAME);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      <StatusMessage gameBoard={gameBoard} winner={winner} />
      <Board
        winningsquares={winningsquares}
        square={gameBoard.square}
        handleSquareClick={handleSquareClick}
      ></Board>
      <button
        type="button"
        onClick={NewGameStart}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        New Game
      </button>
      <h1>CURRENT GAME HISTORY</h1>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
