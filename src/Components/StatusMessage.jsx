import { Fragment } from 'react';

const StatusMessage = ({ winner, isNext, square }) => {
  const noMovesLeft = square.every(squareValue => squareValue !== null);
  const nextPlayer = isNext ? 'X' : 'O';
  const renderStatusMessage = () => {
    if (winner) {
      return (
        <div>
          winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </div>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <div>
          <span className="text-green">O</span> and{' '}
          <span className="text-orange">X</span> Tied
        </div>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <div>
          Next player is{' '}
          <span className={isNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </div>
      );
    }
    return null;
  };
  return <div className="status-message">{renderStatusMessage()}</div>;
};
export default StatusMessage;
