import React, { useState, useEffect } from "react";
import { allPokemon } from "./Data";
import { Pokedex } from "./Components/Pokedex/Pokedex";
import { Score } from "./Components/Score/Score";
import { PokemonInput } from "./Components/PokemonInput/PokemonInput";
import { Timer } from "./Components/Timer/Timer";
import { Results } from "./Components/Results/Results";
import { LandingPage } from "./Components/LandingPage/LandingPage";
import { FacebookShareButton } from "react-share";
import "./App.css";

import Firebase from "firebase";

import { useFirebaseAuth, AuthProvider } from "@use-firebase/auth";

const App = () => {
  const {
    user,
    isSignedIn,
    signIn,
    signInError,
    createAuthProvider,
  } = useFirebaseAuth();

  const onSignIn = (authProvider) => {
    const provider = createAuthProvider(authProvider);
    signIn(provider, { method: "signInWithPopup" });
  };

  const [playerName, setPlayerName] = useState("");
  const [prevRecord, setPrevRecord] = useState({ score: 0 });
  const [pokedex, setPokedex] = useState(allPokemon);
  const [score, setScore] = useState(0);
  //Initial is the main menu, Playing is while the game is currently playing, End is when the timer is up and results are shown
  const [gameState, setGameState] = useState("Initial");
  const [inputState, setInputState] = useState("");

  useEffect(() => {
    onSignIn(AuthProvider.ANONYMOUS);
  }, []);

  const chooseDisplayName = (event) => {
    if (gameState === "Active" && event.currentTarget.value === "") {
      setPlayerName(user.displayName);
    } else {
      setPlayerName(event.currentTarget.value);
    }
  };

  const getUserData = () => {
    let ref = Firebase.database().ref("/Leaderboard/User" + user.uid);
    ref.on("value", (snapshot) => {
      const prevResults = snapshot.val();
      prevResults
        ? setPrevRecord(prevResults)
        : setPrevRecord({ name: playerName, score: 0 });
    });
  };

  const writeUserData = () => {
    console.log(prevRecord.score);
    Firebase.database()
      .ref("Leaderboard/User" + user.uid)
      .set({
        name: playerName !== "" ? playerName : user.displayName,
        score: score > prevRecord.score ? score : prevRecord.score,
      });
  };

  //Get the current date and then and 1 hour to it, this will be our countdown value
  const time = new Date();
  time.setSeconds(time.getSeconds() + 3600);

  const handleInputState = (currentInput) => {
    setInputState(currentInput);
  };

  //Callback for when handleInputState is updated
  useEffect(() => {
    isPokemonInPokedex();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputState]);

  //Remove white space and non alphanumeric characters from strings, and make them lowercase
  const stripString = (str) => {
    return str.toLowerCase().trim().replace(/\W/g, "");
  };

  //Filter the correct answer from the remaining pokemon and set the new state, handle score and clear the input
  const correctPokemonInput = () => {
    const remainingPokemon = pokedex.filter(
      (pokemon) => stripString(pokemon.name) !== stripString(inputState)
    );
    setPokedex(remainingPokemon);
    stripString(inputState).includes("nidoran") ? addScore(2) : addScore(1);
    setInputState("");
  };

  //Check the pokedex state to see if the input matches any pokemon
  const isPokemonInPokedex = () => {
    pokedex.forEach((pokemon) => {
      return stripString(inputState) === stripString(pokemon.name)
        ? correctPokemonInput()
        : null;
    });
  };

  //Things to do when entering the game
  const activeGame = () => {
    setGameState("Active");
    setPokedex(allPokemon);
    setScore(0);
    getUserData();
  };

  //Things to do when restarting the game
  const resetGame = () => {
    setGameState("Initial");
  };

  //Things to do when the game ends
  const endGame = () => {
    setGameState("End");
    writeUserData();
  };

  /*const goToResultsScreen = () => {
    setGameState("Results");
  };*/

  //Will add whatever number which is passed in to the score
  const addScore = (scoreToAdd) => {
    setScore(score + scoreToAdd);
  };

  return (
    <div className="App">
      {gameState !== "Initial" && gameState !== "Results" ? (
        <React.Fragment>
          <div className="Header">
            <div className="Logo Spin"></div>
            <div className="Player">
              <Timer
                expiryTimestamp={time}
                resetGame={resetGame}
                endGame={endGame}
                gameState={gameState}
              />
              <Score score={score} />
            </div>

            {gameState !== "End" ? (
              <PokemonInput
                pokedex={pokedex}
                handleInputState={handleInputState}
                inputState={inputState}
              />
            ) : (
              <FacebookShareButton
                children="Share Your Results"
                url="https://gotta-name-em-all.now.sh/"
                quote={`I scored ${score}/${allPokemon.length} points! Can you do any better?`}
                hashtag="gottanameemall"
              />
            )}
          </div>
          <div className="Container">
            <Pokedex pokedex={pokedex} gameState={gameState} />
          </div>
        </React.Fragment>
      ) : gameState !== "Results" ? (
        <LandingPage
          activeGame={activeGame}
          chooseDisplayName={chooseDisplayName}
          playerName={playerName}
        />
      ) : (
        <Results resetGame={resetGame} score={score} />
      )}
    </div>
  );
};

export default App;
