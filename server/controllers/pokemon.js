import axios from "axios"

export const getPokemon = async (req, res, next) => {
  const { pokemonName } = req.params

  try {
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(res => res.data)
    const pokemonSpecies = await axios.get(pokemon.species.url).then(res => res.data)
    const pokemonDescription = pokemonSpecies.flavor_text_entries[0].flavor_text.replace(/[\n\r\f]+/g, ' ')
  
    // Translate description
    
    res.status(200).json({
      name: pokemon.name,
      description: pokemonDescription
    })
  } catch (error) {
    //handle errors
    res.status(404).json({undefined})
  }
}