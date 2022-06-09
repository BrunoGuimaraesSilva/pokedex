import { PokeType } from ".";

export const pokemonDefault: PokeType = {
  abilities: [
    {
      ability: {
        name: "",
        url: "",
      },
      is_hidden: false,
      slot: 1,
    },
  ],
  base_experience: 1,
  forms: [
    {
      name: "",
      url: "",
    },
  ],
  game_indices: [
    {
      game_index: 1,
      version: {
        name: "",
        url: "",
      },
    },
  ],
  height: 1,
  held_items: [],
  id: 1,
  is_default: true,
  location_area_encounters: "",
  moves: [
    {
      move: {
        name: "",
        url: "",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "",
            url: "",
          },
          version_group: {
            name: "",
            url: "",
          },
        },
      ],
    },
  ],
  name: "",
  order: 1,
  past_types: [],
  species: {
    name: "",
    url: "",
  },
  stats: [
    {
      base_stat: 1,
      effort: 0,
      stat: {
        name: "",
        url: "",
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: "",
        url: "",
      },
    },
  ],
  weight: 1,
};
