import axios from "axios"

export const fetchPokemonBy = async (pokemonName) => {
  // Fetch pokemon
  const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(res => res.data)
  const pokemonSpecies = await axios.get(pokemon.species.url).then(res => res.data)
  const pokemonDescription = pokemonSpecies.flavor_text_entries[0].flavor_text.replace(/[\n\r\f]+/g, ' ')

  // Translate description
  const pokemonTranslation = await axios.post("https://api.funtranslations.com/translate/shakespeare.json", 
    {
      text: pokemonDescription
    }
  ).then(res => res.data)

  // Create response object
  return { name: pokemon.name, description: pokemonTranslation.contents.translated }
}