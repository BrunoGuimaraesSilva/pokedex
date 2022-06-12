import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import api from "../service/api";
import {capitalize} from "../utils"
import { pokemonDefault } from "./pokemonsContext.default";
import {
  PokeType,
  InterPokemonContext,
  InterProviderProps,
  PokemonList,
  PokemonSearchList,
} from "./pokemonsContext.interface";

export const PokemonContext = createContext({} as InterPokemonContext);

export function PokemonsProvider({ children }: InterProviderProps) {
  const router = useRouter();
  const [pokemon, setPokemon] = useState<PokeType>(pokemonDefault);
  const [nextLink, setNextLink] = useState<string>("");
  const [previousLink, setPreviousLink] = useState<string>("");
  const [pokemonsList, setPokemonList] = useState<Array<PokemonList>>([]);
  const [pokemonsSearchList, setPokemonSearchList] = useState<
    Array<PokemonSearchList>
  >([]);
  const [abrirModal, setAbrirModal] = useState<boolean>(false);

  useEffect(() => {
    api.get("/pokemon").then((res) => {
      const arrayPokemons: Array<PokemonList> = [];
      setNextLink(res.data.next);
      setPreviousLink(res.data.previous ?? "");
      res.data.results.forEach((element: PokemonList) => {
        const array = { ...element, id: element.url.split("/")[6] };
        arrayPokemons.push(array);
      });
      setPokemonList(arrayPokemons);
    });
    getPokemonSearchList()
  }, []);

  async function getPokemonFirstPage() {
    try {
      api.get("/pokemon").then((res) => {
        const arrayPokemons: Array<PokemonList> = [];
        setNextLink(res.data.next);
        setPreviousLink(res.data.previous ?? "");
        res.data.results.forEach((element: PokemonList) => {
          const array = { ...element, id: element.url.split("/")[6] };
          arrayPokemons.push(array);
        });
        setPokemonList(arrayPokemons);
      });
    } catch (error) {}
  }

  async function getPokemonlastPage() {
    try {
      api.get("/pokemon?offset=1106&limit=20").then((res) => {
        const arrayPokemons: Array<PokemonList> = [];
        setNextLink(res.data.next);
        setPreviousLink(res.data.previous ?? "");
        res.data.results.forEach((element: PokemonList) => {
          const array = { ...element, id: element.url.split("/")[6] };
          arrayPokemons.push(array);
        });
        setPokemonList(arrayPokemons);
      });
    } catch (error) {}
  }

  async function getPokemonNext() {
    try {
      api.get(nextLink).then((res) => {
        const arrayPokemons: Array<PokemonList> = [];
        setNextLink(res.data.next);
        setPreviousLink(res.data.previous ?? "");
        res.data.results.forEach((element: PokemonList) => {
          const array = { ...element, id: element.url.split("/")[6] };
          arrayPokemons.push(array);
        });
        setPokemonList(arrayPokemons);
      });
    } catch (error) {}
  }

  async function getPokemonPrevius() {
    try {
      api.get(previousLink).then((res) => {
        const arrayPokemons: Array<PokemonList> = [];
        if (res.data.results) {
          setNextLink(res.data.next);
          setPreviousLink(res.data.previous ?? "");
          res.data.results.forEach((element: PokemonList) => {
            const array = { ...element, id: element.url.split("/")[6] };
            arrayPokemons.push(array);
          });
          setPokemonList(arrayPokemons);
        }
      });
    } catch (error) {}
  }

  async function getPokemonDefault(dados: string) {
    try {
      api.get(`/pokemon/${dados}`).then((res) => {
        setPokemon(res.data);
      });
    } catch (error) {}
  }

  async function getPokemonSearchList() {
    try {
      api.get(`/pokemon?limit=890`).then((res) => {
        const arrayPokemonsSearch: Array<PokemonSearchList> = [];

        res.data.results.forEach((element: PokemonList) => {
          const array = { value:element.name, label:capitalize(element.name), id: element.url.split("/")[6] };
          arrayPokemonsSearch.push(array);
        });
        setPokemonSearchList(arrayPokemonsSearch);
      });
    } catch (error) {}
  }

  return (
    <PokemonContext.Provider
      value={{
        getPokemonSearchList,
        getPokemonDefault,
        getPokemonNext,
        getPokemonPrevius,
        setPokemon,
        getPokemonFirstPage,
        getPokemonlastPage,
        pokemonsSearchList,
        pokemonsList,
        pokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
