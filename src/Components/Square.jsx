const Square = ({ value, onClick, iswinningsquare }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`square ${value === 'X' ? 'text-green' : 'text-orange'} ${
        iswinningsquare ? 'winning' : ''
      }`}
    >
      {value}
    </button>
  );
};
export default Square;
