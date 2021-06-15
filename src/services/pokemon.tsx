import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemanApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokeman/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemanApi;
