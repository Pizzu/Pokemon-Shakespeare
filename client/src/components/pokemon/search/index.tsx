import { useState } from "react"
import { Button } from "../../common"
import { PokemonCard } from "../../pokemon"

const PokemonSearch: React.FC = () => {

  const [pokemonData, setPokemonData] = useState<boolean>(false)
  const resetPokemonData = () => setPokemonData(false)

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Click")
    setPokemonData(true)
  }

  return (
    <>
      <form onSubmit={onFormSubmit} className="grid grid-cols-7 items-stretch gap-6">
        <label htmlFor="pokemon" className="block col-span-5">
          <input type="text" id="pokemon" name="pokemon" className="h-full px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-lg focus:ring-1"
            placeholder="Charizard, Bulbasaur, Wartortle ..." />
        </label>
        <div className="col-span-2">
          <Button type="submit" className="bg-primary text-white">Search Now</Button>
        </div>
      </form>
      {
        pokemonData &&
        <PokemonCard pokemonData={pokemonData} resetPokemonData={resetPokemonData} />
      }
    </>
  )
}

export default PokemonSearch