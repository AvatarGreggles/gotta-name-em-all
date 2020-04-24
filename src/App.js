import React, { useState, useEffect } from "react";
import { allPokemon } from "./Data";
import { Pokedex } from "./Components/Pokedex/Pokedex";
import { Header } from "./Components/Header/Header";
import { LandingPage } from "./Components/LandingPage/LandingPage";
import { GameOver } from "./Components/GameOver/GameOver";
import "./App.css";

const App = () => {
  const [startGame, setStartGame] = useState(false);
  const [pokedex, setPokdex] = useState(allPokemon);
  const [gameOver, setGameOver] = useState(false);

  return (
    <div className="App">
      {startGame ? (
        <>
          {!gameOver ? (
            <>
              <Header
                pokedex={pokedex}
                setPokdex={setPokdex}
                setStartGame={setStartGame}
                setGameOver={setGameOver}
              />
              <div className="Container">
                <Pokedex pokedex={pokedex} />
              </div>
            </>
          ) : (
            <GameOver setStartGame={setStartGame} setGameOver={setGameOver} />
          )}
        </>
      ) : (
        <LandingPage setStartGame={setStartGame} />
      )}
    </div>
  );
};

export default App;
