const StartMenu = ({ setGameStarted, setShowRules }) => {
  return (
    <div>
      <button onClick={() => setGameStarted(true)}>Start Game</button>
      <button onClick={() => setShowRules(true)}>Rules</button>
    </div>
  );
};

export default StartMenu;
