import React, { useEffect, useState } from "react";

import Firebase from "firebase";

export const Leaderboard = () => {
  const [playerScores, setPlayerScores] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPlayerScores = () => {
      let ref = Firebase.database().ref("/Leaderboard");
      ref.on("value", (snapshot) => {
        const scores = snapshot.val();
        console.log(Object.entries(scores));
        setPlayerScores(Object.entries(scores));
        setLoading(true);
      });
    };
    getPlayerScores();
  }, []);

  const sortByScore = (a, b) => {
    return b[1].score - a[1].score;
  };

  return (
    <div className="Leaderboard">
      <div className="Ranking">
        <div className="Ranking-Place">
          <strong>Rank</strong>
        </div>
        <div className="Ranking-Name">
          <strong>Name</strong>
        </div>
        <div className="Ranking-Score">
          <strong>Score</strong>
        </div>
      </div>
      <hr></hr>
      {loading &&
        playerScores.sort(sortByScore).map((player, index) => (
          <div key={index} className="Ranking">
            <div className="Ranking-Place">#{index + 1}</div>
            <div className="Ranking-Name">{player[1].name}</div>
            <div className="Ranking-Score">{player[1].score}</div>
          </div>
        ))}
    </div>
  );
};
