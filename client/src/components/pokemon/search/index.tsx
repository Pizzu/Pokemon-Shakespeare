import { useState } from "react"
import useSWR from "swr"
import { ErrorMessage, SearchForm } from "../../common"
import { PokemonCard } from "../../pokemon"
import axios from "axios"
import { PokemonServerRes } from "../../../types"

const PokemonSearch: React.FC = () => {
  const [pokemonToFetch, setPokemonToFetch] = useState<string | null>(null)

  const { data, error, isValidating } = useSWR(() =>
    pokemonToFetch ? `http://localhost:5000/api/pokemon/${pokemonToFetch}` : null,
    async (url) => {
      console.log("ciao")
      const response: PokemonServerRes = await axios.get(url).then(res => res.data)
      return response
    },
    { shouldRetryOnError: false, revalidateOnFocus: false }
  )

  const fetchPokemon = (pokemonName: string) => {
    setPokemonToFetch(pokemonName)
  }

  return (
    <>
      <SearchForm fetchPokemon={fetchPokemon} />
      {
        data &&
        <PokemonCard pokemonData={data} />
      }
      {
        (error && !isValidating) &&
        <ErrorMessage />
      }
    </>
  )
}

export default PokemonSearch