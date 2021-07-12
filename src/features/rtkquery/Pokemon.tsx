import * as React from "react";
import { useGetPokemonByNameQuery } from "../../services/pokemon";

interface PokemonProps {
  name: string;
  pollingInterval: number;
}

function Pokemon(props: PokemonProps) {
  // Using a query hook automatically fetches data and returns query values
  const {
    data,
    error,
    isLoading,
    isFetching,
    refetch,
  } = useGetPokemonByNameQuery(props.name, {
    pollingInterval: props.pollingInterval,
  });

  if (error) {
    return <>Oh no, there was an error</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (data) {
    return (
      <>
        <h3>
          {data.species.name}
          {isFetching ? "..." : ""}
        </h3>
        <img src={data.sprites.front_shiny} alt={data.species.name} />
        <button type="button" onClick={refetch}>
          Force re-fetch 1
        </button>
      </>
    );
  }
  return null;
}

export default Pokemon;
