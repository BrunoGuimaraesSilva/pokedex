import { PokeType, PokemonSearchList } from "../../context";

export interface PokemonModalInterfaceProps {
  onCloseModal: () => void;
  onOpenModal: () => void;
  isOpenModal: boolean;
  pokeData: PokeType;
}

export interface TamplateModalInterfaceProps {
  pokeData: PokeType;
}

export interface SearchModalInterfaceProps {
  onCloseModal: () => void;
  onOpenModal: () => void;
  isOpenModal: boolean;
  pokemonsList: Array<PokemonSearchList>;
}

export interface searchPokemonDescriptionProps {
  id: String;
  label: String;
  value: String;
}
