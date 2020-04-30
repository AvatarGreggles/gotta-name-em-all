import React from "react";

export const PokemonInput = ({ handleInputState, inputState }) => {
  const handleInput = (event) => {
    const currentInput = event.currentTarget.value;
    handleInputState(currentInput);
  };

  return (
    <input className="NameInput" onChange={handleInput} value={inputState} />
  );
};
