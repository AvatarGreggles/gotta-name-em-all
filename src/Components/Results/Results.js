import React, { useEffect } from "react";
import { allPokemon } from "../../Data";

import { FacebookShareButton } from "react-share";

export const Results = ({ score, resetGame }) => {
  useEffect(() => {
    const heading = document.querySelector(".GameOver-Heading");
    heading.classList.add("fade-in");
  }, []);
  return (
    <div className="GameOver">
      <h1 className="GameOver-Heading">Results</h1>
      <h2 className="Results">
        You scored {score}/{allPokemon.length}
      </h2>
      <FacebookShareButton
        children="Share Your Results"
        url="https://gotta-name-em-all.now.sh/"
        quote={`I scored ${score}/${allPokemon.length} points! Can you do any better?`}
        hashtag="gottanameemall"
      />
      <button onClick={resetGame}>Return to Main Menu</button>
    </div>
  );
};
