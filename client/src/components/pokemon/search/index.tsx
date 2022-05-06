import { Button } from "../../common"

const PokemonSearch: React.FC = () => {

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Click")
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
    </>

  )
}

export default PokemonSearch