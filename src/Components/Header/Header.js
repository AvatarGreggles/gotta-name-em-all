import React, { useState } from "react";
import { Score } from "../Score/Score";
import { PokemonInput } from "../PokemonInput/PokemonInput";
import { Timer } from "../Timer/Timer";

export const Header = ({ pokedex, setPokdex, setStartGame, setGameOver }) => {
  const [score, setScore] = useState(0);

  //Get the current date and then and 1 hour to it, this will be our countdown value
  const time = new Date();
  time.setSeconds(time.getSeconds() + 3600);

  const addScore = () => setScore(score + 1);

  return (
    <div className="Header">
      <div className="Logo Spin"></div>
      <div className="Player">
        <Timer
          expiryTimestamp={time}
          setStartGame={setStartGame}
          setGameOver={setGameOver}
        />
        <PokemonInput
          addScore={addScore}
          pokedex={pokedex}
          setPokdex={setPokdex}
        />
      </div>
      <Score score={score} />
    </div>
  );
};
