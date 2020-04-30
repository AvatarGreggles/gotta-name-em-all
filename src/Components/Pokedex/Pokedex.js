import React, { useState, useEffect } from "react";
import { allPokemon } from "../../Data";
import { Pokemon } from "../Pokemon/Pokemon";

export const Pokedex = ({ pokedex, gameState }) => {
  //Warn the player before navigating away from the page
  useEffect(() => {
    window.addEventListener("beforeunload", function (e) {
      // Cancel the event
      e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
      // Chrome requires returnValue to be set
      e.returnValue = "";
    });
  }, []);

  useEffect(() => {
    const pokedexContainer = document.querySelector(".Pokedex");
    if (allPokemon.length <= 151) {
      pokedexContainer.style.height = "500px";
      return;
    }

    if (allPokemon.length > 151 && allPokemon.length <= 251) {
      pokedexContainer.style.height = "850px";
      return;
    }

    if (allPokemon.length > 251 && allPokemon.length <= 386) {
      pokedexContainer.style.height = "1300px";
      return;
    }

    if (allPokemon.length > 387 && allPokemon.length <= 493) {
      pokedexContainer.style.height = "1700px";
      return;
    }

    if (allPokemon.length > 494 && allPokemon.length <= 649) {
      pokedexContainer.style.height = "2200px";
      return;
    }

    if (allPokemon.length > 650 && allPokemon.length <= 721) {
      pokedexContainer.style.height = "2500px";
      return;
    }

    if (allPokemon.length > 722 && allPokemon.length <= 809) {
      pokedexContainer.style.height = "2800px";
      return;
    }

    if (allPokemon.length > 810 && allPokemon.length <= 890) {
      pokedexContainer.style.height = "3100px";
      return;
    }
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
      {allPokemon.map((pokemon, index) => (
        <React.Fragment key={index}>
          {renderRegion(pokemon.id)}
          <Pokemon pokemon={pokemon} pokedex={pokedex} gameState={gameState} />
        </React.Fragment>
      ))}
    </div>
  );
};
