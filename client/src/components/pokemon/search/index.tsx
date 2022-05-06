import { useState } from "react"
import useSWR from "swr"
import { SearchForm } from "../../common"
import { PokemonCard } from "../../pokemon"
import axios from "axios"
import { PokemonServerRes } from "../../../types"

const PokemonSearch: React.FC = () => {
  const [pokemonToFetch, setPokemonToFetch] = useState<string | null>(null)

  const fetchPokemon = (pokemonName: string) => {
    console.log(pokemonName)
    setPokemonToFetch(pokemonName)
  }

  const { data } = useSWR(() =>
    pokemonToFetch ? `http://localhost:5000/api/pokemon/${pokemonToFetch}` : null,
    async (url) => {
      console.log("I run")
      const response: PokemonServerRes = await axios.get(url).then(res => res.data)
      return response
    },
    {shouldRetryOnError: false, revalidateOnFocus: false}
  )

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