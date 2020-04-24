import React, { useState, useEffect } from "react";
import { allPokemon } from "../../Data";
import { Pokemon } from "../Pokemon/Pokemon";

export const Pokedex = ({ pokedex }) => {
  const [activePokemon, setActivePokemon] = useState();

  //Warn the player before navigating away from the page
  useEffect(() => {
    window.addEventListener("beforeunload", function (e) {
      // Cancel the event
      e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
      // Chrome requires returnValue to be set
      e.returnValue = "";
    });
  }, []);

  const renderRegion = (id) => {
    switch (id) {
      case 1:
        return <div className="Region">Kanto</div>;
      case 152:
        return <div className="Region">Johto</div>;
      case 252:
        return <div className="Region">Hoenn</div>;
      case 387:
        return <div className="Region">Sinnoh</div>;
      case 494:
        return <div className="Region">Unova</div>;
      case 650:
        return <div className="Region">Kalos</div>;
      case 722:
        return <div className="Region">Alola</div>;
      case 810:
        return <div className="Region">Galar</div>;
      default:
        return null;
    }
  };

  return (
    <div className="Pokedex">
      <div className="modal-outer">
        <div className="modal-inner">
          {activePokemon ? (
            <div className="Modal-Pokemon">
              <div className="Modal-Pokemon__Name">{activePokemon.name}</div>
              <div className="Modal-Pokemon__Sprite">
                <img src={activePokemon.sprites.front_default} />
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {allPokemon.map((pokemon, index) => (
        <React.Fragment key={index}>
          {renderRegion(pokemon.id)}
          <Pokemon
            pokemon={pokemon}
            pokedex={pokedex}
            setActivePokemon={setActivePokemon}
          />
        </React.Fragment>
      ))}
    </div>
  );
};
