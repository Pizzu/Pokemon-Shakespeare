import { useState } from "react"
import useSWR from "swr"
import { SearchForm } from "../../common"
import { PokemonCard } from "../../pokemon"

const PokemonSearch: React.FC = () => {
  const [pokemonToFetch, setPokemonToFetch] = useState<string | null>(null)

  const fetchPokemon = (pokemonName: string) => {
    console.log(pokemonName)
    setPokemonToFetch(pokemonName)
  }

  const { data, error, isValidating } = useSWR(() =>
    pokemonToFetch ? `http://localhost:5000/api/pokemon/${pokemonToFetch}` : null,
    async (url) => {
      console.log("I run")
      return { name: "Pokemon", description: "Des" }
    }
  )
  console.log(error)
  console.log(isValidating)
  
  return (
    <>
      <SearchForm fetchPokemon={fetchPokemon} />
      {
        data &&
        <PokemonCard pokemonData={data} />
      }
    </>
  )
}

export default PokemonSearch