import React, { useState } from "react";
import { Leaderboard } from "../Leaderboard/Leaderboard";

export const LandingPage = ({ activeGame, chooseDisplayName, playerName }) => {
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  //const [chosenPokedex, setChosenPokdex] = useState([]);
  //const kanto = allPokemon.slice(0, 151);
  //const johto = allPokemon.slice(151, 252);

  return (
    <div className="LandingPage">
      <a href="https://fontmeme.com/pokemon-font/">
        <img
          className="PokemonLogo"
          src="https://fontmeme.com/permalink/200501/f614b265853ca7043e4fb95a10b23e30.png"
          alt="pokemon-font"
          border="0"
        />
      </a>
      {!showLeaderboard ? (
        <div className="Instructions">
          <div>
            <h2>Instructions</h2>
            <p>
              In this game, you will be challenged to{" "}
              <strong>Name as many Pokémon</strong> as you possibly can within
              the time limit. Simply enter a name of a Pokémon and if the input
              matches, it will be revealed and you will score 1 point!
              Currently, there are a total of 890 points to gain! Have fun and
              if you have any feedback, hit me up.
              <a
                href="mailto:gregorynimmo93@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                here
              </a>
              !
            </p>
            <p>
              To end the game early, hit the pause button and then choose 'Give
              up!', you will then be able to share your score with others.
            </p>
          </div>
          <i></i>
        </div>
      ) : (
        <Leaderboard />
      )}
      <label>Choose a display name</label>
      <input type="name" value={playerName} onChange={chooseDisplayName} />
      <div className="LandingPageButtons">
        <button
          onClick={() => setShowLeaderboard(showLeaderboard ? false : true)}
        >
          {showLeaderboard ? "Back" : "Leaderboard"}
        </button>
        <button onClick={() => activeGame()}>Ready</button>
      </div>
      <div className="Signature">
        Made by{" "}
        <a
          href="https://github.com/avatargreggles"
          rel="noopener noreferrer"
          target="_blank"
        >
          AvatarGreggles
        </a>
      </div>
      {/*<div className="ChooseRegions">
        <button onClick={() => setChosenPokdex(kanto)}>Kanto</button>
        <button onClick={() => setChosenPokdex(johto)}>Johto</button>
        <button
          onClick={() =>
            setChosenPokdex((prevState) => [...prevState, "Hoenn"])
          }
        >
          Hoenn
        </button>
        <button
          onClick={() =>
            setChosenPokdex((prevState) => [...prevState, "Sinnoh"])
          }
        >
          Sinnoh
        </button>
        <button
          onClick={() =>
            setChosenPokdex((prevState) => [...prevState, "Unova"])
          }
        >
          Unova
        </button>
        <button
          onClick={() =>
            setChosenPokdex((prevState) => [...prevState, "Kalos"])
          }
        >
          Kalos
        </button>
        <button
          onClick={() =>
            setChosenPokdex((prevState) => [...prevState, "Alola"])
          }
        >
          Alola
        </button>
        <button
          onClick={() =>
            setChosenPokdex((prevState) => [...prevState, "Galar"])
          }
        >
          Galar
        </button>
        </div>*/}
    </div>
  );
};
