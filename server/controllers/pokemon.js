import { fetchPokemonBy } from "../helpers/index.js"

export const getPokemon = async (req, res, next) => {
  const { pokemonName } = req.params
  try {
    const pokemon = await fetchPokemonBy(pokemonName)
    res.status(200).json({name: pokemon.name, description: pokemon.description})
  } catch (error) {
    // Errors will be handled by an ErrorHandler middleware
    next(error)
  }
}