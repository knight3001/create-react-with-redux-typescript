import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Pokemon {
  id: number;
  name: string;
  url: string;
  species: { name: string };
  sprites: { front_shiny: string };
}

interface PokemonSearch {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
}

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  tagTypes: [],
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getAllPokemon: builder.query<PokemonSearch, void>({
      query: () => `pokemon?limit=${100}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetAllPokemonQuery } = pokemonApi;
