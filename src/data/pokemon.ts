export const types = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
  "stellar",
  "unknown",
];

const badgeColors = [
  "ring-slate-400",
  "ring-indigo-500",
  "ring-rose-300",
  "ring-sky-400",
  "ring-red-400",
  "ring-emerald-400",
];

/* 
PokemonClient.getPokemonByName("treecko");
or
https://pokeapi.co/api/v2/pokemon/treecko/
*/
export const treecko = {
  height: 5,
  id: 252,
  name: "treecko",
  order: 347,
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/252.png",
    back_female: null,
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/252.png",
    back_shiny_female: null,
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
    front_female: null,
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/252.png",
    front_shiny_female: null,
    other: {
      dream_world: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/252.svg",
        front_female: null,
      },
      home: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/252.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/252.png",
        front_shiny_female: null,
      },
      "official-artwork": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png",
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/252.png",
      },
      showdown: {
        back_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/252.gif",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/252.gif",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/252.gif",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/252.gif",
        front_shiny_female: null,
      },
    },
  },
  types: [
    {
      slot: 1,
      type: {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
      },
    },
  ],
  weight: 50,
};

/* 
PokemonClient.getPokemonSpeciesByName("treecko");
or
https://pokeapi.co/api/v2/pokemon-species/treecko

should be the first flavor_text_entries entry where language.name = "en"
*/
export const treeckoFlavorText = `TREECKO has small hooks on the bottom of its feet that enable it to scale vertical walls.  This POKéMON attacks by slamming foes with its thick tail.`;
