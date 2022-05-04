import axios from "axios"

export const getPokemon = async (req, res, next) => {
  const { pokemonName } = req.params

  try {
    // Fetch pokemon
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(res => res.data)
    const pokemonSpecies = await axios.get(pokemon.species.url).then(res => res.data)
    const pokemonDescription = pokemonSpecies.flavor_text_entries[0].flavor_text.replace(/[\n\r\f]+/g, ' ')
  
    // Translate description

    // Create response object
    res.status(200).json({
      name: pokemon.name,
      description: pokemonDescription
    })
  } catch (error) {
    // Errors will be handled by an ErrorHandler middleware
    next(error)
  }
}