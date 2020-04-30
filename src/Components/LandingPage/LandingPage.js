import React from "react";

export const LandingPage = ({ activeGame }) => {
  //const [chosenPokedex, setChosenPokdex] = useState([]);
  //const kanto = allPokemon.slice(0, 151);
  //const johto = allPokemon.slice(151, 252);

  return (
    <div className="LandingPage">
      <h1 className="LandingPage-Heading">Gotta Name Em' All!</h1>
      <div className="Instructions">
        <h2>Instructions</h2>
        <p>
          In this game, you will be challenged to{" "}
          <strong>Name as many Pokémon</strong> as you possibly can within the
          time limit. Simply enter a name of a Pokémon and if the input matches,
          it will be revealed and you will score 1 point! Currently, there are a
          total of 890 points to gain! Have fun and if you have any feedback,
          hit me up,{" "}
          <a
            href="mailto:gregorynimmo93@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            here
          </a>
          !
        </p>
      </div>
      <button onClick={() => activeGame()}>Ready!</button>
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
