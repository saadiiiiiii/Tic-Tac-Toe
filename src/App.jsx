import Board from './Components/Board';
import StatusMessage from './Components/StatusMessage';
import { useState } from 'react';
import './style.scss';
import { calculateWinner } from './Components/calculateWinner';
function App() {
  const [isNext, setIsNext] = useState(false);
  const [square, setSquare] = useState(Array(9).fill(null));
  const winner = calculateWinner(square);

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
      <StatusMessage winner={winner} square={square} isNext={isNext} />
      <Board square={square} handleSquareClick={handleSquareClick}></Board>
    </div>
  );
}

export default App;
