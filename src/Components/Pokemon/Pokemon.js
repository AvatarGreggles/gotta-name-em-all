import React from "react";

export const Pokemon = ({ pokemon, index, pokedex, gameState }) => {
  return (
    <React.Fragment>
      {gameState !== "End" ? (
        <React.Fragment>
          {!pokedex.includes(pokemon) ? (
            /* If a div will be used as a button, ensure you have a role attribute with a value of 'button' 
      and set the tabindex to 0 so the user can navigate to it */
            <div key={index} className="Pokemon--Display">
              <div className="Pokemon__ID--Display">{pokemon.id}</div>
              <div className="Pokemon__Name">{pokemon.name}</div>
            </div>
          ) : (
            <div key={index} className="Pokemon">
              <div className="Pokemon__ID">{pokemon.id}</div>
              <div className="Pokemon__Name"></div>
            </div>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {!pokedex.includes(pokemon) ? (
            /* If a div will be used as a button, ensure you have a role attribute with a value of 'button' 
      and set the tabindex to 0 so the user can navigate to it */
            <div key={index} className="Pokemon--Display">
              <div className="Pokemon__ID--Display">{pokemon.id}</div>
              <div className="Pokemon__Name">{pokemon.name}</div>
            </div>
          ) : (
            <div key={index} className="Pokemon--Missed">
              <div className="Pokemon__ID--Missed">{pokemon.id}</div>
              <div className="Pokemon__Name">{pokemon.name}</div>
            </div>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
