import React, { useEffect } from "react";
import { allPokemon } from "../../Data";

export const GameOver = ({ resetGame, score, missedPokemon }) => {
  useEffect(() => {
    const heading = document.querySelector(".GameOver-Heading");
    heading.classList.add("fade-in");
  }, []);
  return (
    <div className="GameOver">
      <h1 className="GameOver-Heading">Game Over</h1>
      <h2 className="Results">
        You scored {score}/{allPokemon.length}
      </h2>
      <button onClick={() => resetGame()}>Return to Main Menu</button>
      <div>You missed the following Pokemon:</div>
      <ul className="MissingPokemon">{missedPokemon()}</ul>
    </div>
  );
};
