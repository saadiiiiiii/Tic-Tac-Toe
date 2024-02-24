import Board from './Components/Board';
import { useState } from 'react';
import './style.scss';
import { calculateWinner } from './Components/calculateWinner';
function App() {
  const [isNext, setIsNext] = useState(false);
  const [square, setSquare] = useState(Array(9).fill(null));
  const winner = calculateWinner(square);
  const nextPlayer = isNext ? 'X' : 'O';
  const statusmessage = winner
    ? `winner is ${winner}`
    : `Next Player Is ${nextPlayer}`;
  const handleSquareClick = clickedposition => {
    if (square[clickedposition] || winner) {
      return;
    }

    setSquare(currentSquare => {
      return currentSquare.map((squareValue, position) => {
        if (clickedposition === position) {
          return isNext ? 'X' : 'O';
        }

        return squareValue;
      });
    });
    setIsNext(currNext => !currNext);
  };
  return (
    <div className="app">
      <h2>{statusmessage}</h2>
      <Board square={square} handleSquareClick={handleSquareClick}></Board>
    </div>
  );
}

export default App;
