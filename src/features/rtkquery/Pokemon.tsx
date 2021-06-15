import * as React from "react";
import { useGetPokemonByNameQuery } from "../../services/pokemon";

interface PokemonProps {
  name: string;
  pollingInterval: nunber;
}

function Pokemon(props: PokemonProps) {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(
    props.name,
    {
      pollingInterval: props.pollingInterval,
    }
  );

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
      </>
    );
  }
  return null;
}

export default Pokemon;
