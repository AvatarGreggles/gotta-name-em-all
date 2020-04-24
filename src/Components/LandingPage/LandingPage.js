import React from "react";

export const LandingPage = ({ setStartGame }) => {
  return (
    <div className="LandingPage">
      <h1 className="LandingPage-Heading">Gotta Name Em' All!</h1>
      <button onClick={() => setStartGame(true)}>Start Game</button>
    </div>
  );
};
