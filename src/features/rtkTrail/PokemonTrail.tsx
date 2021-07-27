import React, { useReducer } from "react";
import { useGetPokemonByNameQuery } from "./hooks";

function Bulbasaur() {
  const { data, isError, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  return (
    <div className="App">
      {isError ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
}

function PokemonTrail() {
  const [isBulbasaurMounted, toggleIsBulbasaurMounted] = useReducer(
    (state) => !state,
    true
  );
  return (
    <div className="App">
      <button type="button" onClick={toggleIsBulbasaurMounted}>
        Toggle bulbasaur
      </button>
      {isBulbasaurMounted && <Bulbasaur />}
    </div>
  );
}

export default PokemonTrail;
