import React, { useEffect } from "react";

export const GameOver = ({ setGameOver }) => {
  useEffect(() => {
    const heading = document.querySelector(".GameOver-Heading");
    heading.classList.add("fade-in");
  }, []);
  return (
    <div className="GameOver">
      <h1 className="GameOver-Heading">Game Over!</h1>
      <button onClick={() => setGameOver(false)}>Start New Game</button>
    </div>
  );
};
