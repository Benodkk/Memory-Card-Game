const GameOver = ({ setGameOver }) => {
  return <div onClick={() => setGameOver(false)}>Game Over!</div>;
};

export default GameOver;
