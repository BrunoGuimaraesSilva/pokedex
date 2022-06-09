import { ReactNode } from "react";

export interface PokemonList {
  name: string;
  url: string;
  id: string;
}

export interface InterPokemonContext {
  pokemon: PokeType;
  pokemonsList: Array<PokemonList>;
  setAbrirModal(valor: boolean): void;
  getPokemon(dados: string): Promise<void>;
}

export interface InterProviderProps {
  children: ReactNode;
}

export interface PokeType {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Array<AbilitiesEntity>;
  forms?: SimpleType[] | null;
  game_indices?: GameIndicesEntity[] | null;
  held_items?: HeldItemsEntity[] | null;
  location_area_encounters: string;
  moves?: MovesEntity[] | null;
  species?: SimpleType;
  sprites?: Sprites;
  stats: Array<StatsType>;
  types: Array<PokemonType>;
  past_types?: any;
}


export interface SimpleType {
  name: string;
  url: string;
}

export interface StatsType {
  base_stat: number;
  effort: number;
  stat: SimpleType;
}

export interface PokemonType {
  slot: number;
  type: SimpleType;
}

export interface AbilitiesEntity {
  is_hidden: boolean;
  slot: number;
  ability: SimpleType;
}

export interface GameIndicesEntity {
  game_index: number;
  version: SimpleType;
}
export interface HeldItemsEntity {
  item: SimpleType;
  version_details?: VersionDetailsEntity[] | null;
}
export interface VersionDetailsEntity {
  rarity: number;
  version: SimpleType;
}
export interface MovesEntity {
  move: SimpleType;
  version_group_details?: VersionGroupDetailsEntity[] | null;
}
export interface VersionGroupDetailsEntity {
  level_learned_at: number;
  version_group: SimpleType;
  move_learn_method: SimpleType;
}
export interface Sprites {
  back_default: string;
  back_female?: null;
  back_shiny: string;
  back_shiny_female?: null;
  front_default: string;
  front_female?: null;
  front_shiny: string;
  front_shiny_female?: null;
  other: any;
  versions: any;
}
