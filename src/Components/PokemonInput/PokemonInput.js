import React from "react";

export const PokemonInput = ({ handleInputState, inputState }) => {
  const handleInput = (event) => {
    const currentInput = event.currentTarget.value;
    handleInputState(currentInput);
  };

  return (
    <input
      type="name"
      className="NameInput"
      onChange={handleInput}
      value={inputState}
      placeholder="Enter a Pokémon name..."
    />
  );
};
