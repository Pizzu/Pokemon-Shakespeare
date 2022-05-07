import { useState } from "react"
import { ErrorMessage, Loader, SearchForm } from "../../common"
import { PokemonCard } from "../../pokemon"
import { usePokemon } from "../../../hooks/usePokemon"

const PokemonSearch: React.FC = () => {
  const [pokemonToFetch, setPokemonToFetch] = useState<string | null>(null)
  const { data, error, isLoading } = usePokemon(pokemonToFetch)

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
        isLoading &&
        <Loader />
      }
      {
        (error) &&
        <ErrorMessage />
      }
    </>
  )
}

export default PokemonSearch