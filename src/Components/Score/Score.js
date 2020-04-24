import React from "react";
import { allPokemon } from "../../Data";
import { Spinner } from "../Spinner/Spinner";

export const Score = ({ score }) => {
  return (
    <div className="Score">
      <Spinner
        radius={65}
        stroke={8}
        progressPercentage={score}
        limit={allPokemon.length}
      />
    </div>
  );
};
