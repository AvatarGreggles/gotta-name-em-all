import React from "react";

export const Pokemon = ({ pokemon, index, pokedex, setActivePokemon }) => {
  const retrievePokemon = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((pokemon) => setActivePokemon(pokemon));
  };

  const showPokemon = (event, pokemon) => {
    const modalOuter = document.querySelector(".modal-outer");

    //Toggle active class to 'open'
    modalOuter.classList.add("open");
    retrievePokemon(pokemon.id);

    //Template literals saves a loooooad of time! Originally I was doing a switch statement with all 18 types!
    modalOuter.classList.add(`${pokemon.types[0]}-Background`);

    const closeModal = (event) => {
      //Using .closest, we can check if the user is clicking within the boundaries of the modal,
      // otherwise, we return that they are clicking outside
      const isOutside = !event.target.closest(".modal-inner");

      if (event.key === "Escape" || (event.type === "click" && isOutside)) {
        //Toggle by removing the active class of 'open'
        //modalOuter.classList.remove("open");
        modalOuter.className = "modal-outer";
        modalOuter.removeEventListener("click", closeModal);
        window.removeEventListener("keydown", closeModal);
        return;
      }
    };

    modalOuter.addEventListener("click", closeModal);
    window.addEventListener("keydown", closeModal);
  };

  return (
    <>
      {!pokedex.includes(pokemon) ? (
        /* If a div will be used as a button, ensure you have a role attribute with a value of 'button' 
      and set the tabindex to 0 so the user can navigate to it */
        <div
          role="button"
          tabIndex="0"
          key={index}
          onClick={(event) => showPokemon(event, pokemon)}
          className="Pokemon--Display"
        >
          <div className="Pokemon__ID--Display">{pokemon.id}</div>
          <div className="Pokemon__Name">{pokemon.name}</div>
        </div>
      ) : (
        <div key={index} className="Pokemon">
          <div className="Pokemon__ID">{pokemon.id}</div>
          <div className="Pokemon__Name"></div>
        </div>
      )}
    </>
  );
};
