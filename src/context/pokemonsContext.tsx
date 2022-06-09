import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../service/api";
import { pokemonDefault } from "./pokemonsContext.default";
import {
  PokeType,
  InterPokemonContext,
  InterProviderProps,
  PokemonList,
} from "./pokemonsContext.interface";

export const PokemonContext = createContext({} as InterPokemonContext);

export function PokemonsProvider({ children }: InterProviderProps) {
  const router = useRouter();
  const [pokemon, setPokemon] = useState<PokeType>(pokemonDefault);
  const [pokemonsList, setPokemonList] = useState<Array<PokemonList>>([]);
  const [abrirModal, setAbrirModal] = useState<boolean>(false);

  useEffect(() => {
    api.get("/pokemon").then((res) => {
      const arrayPokemons: Array<PokemonList> = [];
      res.data.results.forEach((element: PokemonList) => {
        const array = { ...element, id: element.url.split("/")[6] };
        arrayPokemons.push(array);
      });
      setPokemonList(arrayPokemons);
    });
  }, []);

  async function getPokemon(dados: string) {
    try {
      api.get(`/pokemon/${dados}`).then((res) => {
        setPokemon(res.data);
      });
    } catch (error) {}
  }

  return (
    <PokemonContext.Provider
      value={{ getPokemon, setAbrirModal, pokemonsList, pokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
