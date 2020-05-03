import React from "react";

export const PokemonInput = ({ handleInputState, inputState, isPaused }) => {
  const handleInput = (event) => {
    const currentInput = event.currentTarget.value;
    handleInputState(currentInput);
  };

  return (
    <React.Fragment>
      {!isPaused ? (
        <input
          type="name"
          className="NameInput"
          onChange={handleInput}
          value={inputState}
          placeholder="Type here..."
          disabled
        />
      ) : (
        <input
          type="name"
          className="NameInput"
          onChange={handleInput}
          value={inputState}
          placeholder="Type here..."
        />
      )}
    </React.Fragment>
  );
};
