import useSWR from "swr"
import axios from "axios"
import type { PokemonServerRes } from "../types"

export const usePokemon = (pokemonToFetch: string | null) => {
  const { data, error, isValidating } = useSWR(() =>
    pokemonToFetch ? `http://localhost:5000/api/pokemon/${pokemonToFetch}` : null,
    async (url) => {
      const response: PokemonServerRes = await axios.get(url).then(res => res.data)
      return response
    },
    { shouldRetryOnError: false, revalidateOnFocus: false }
  )

  return {
    data,
    error,
    isLoading: !data && !error && isValidating,
    isValidating
  }
}