import React from "react";

export const PokemonInput = ({ addScore, pokedex, setPokdex }) => {
  //Input onChange event - when a user types into the input, it triggers this event.
  const checkForPokemon = (event) => {
    /* event.currentTarget ensures we get the element the event listener was attatched to,
    and not the element that fired the event (like nested elements bubbling up)*/
    const currentInput = event.currentTarget.value.toLowerCase();
    for (let i = 0; i < pokedex.length - 1; i++) {
      if (pokedex[i].name === currentInput) {
        addScore();
        //Using Array.filter, we create a new array of remaining pokemon the player needs and set the state using setPokdex
        setPokdex(pokedex.filter((pokemon) => pokemon.name !== currentInput));
        //Clear the users input
        event.currentTarget.value = "";
      }
    }
  };

  return <input className="NameInput" onChange={checkForPokemon} />;
};
