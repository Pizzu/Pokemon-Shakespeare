import { useForm } from "react-hook-form"
import { Button } from "../../common"
import type { FormData } from "../../../types"

type SearchFormProps = {
  fetchPokemon: (pokemonName: string) => void
}

const SearchForm: React.FC<SearchFormProps> = ({ fetchPokemon }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onFormSubmit = handleSubmit(({pokemonName}) => {
    reset()
    fetchPokemon(pokemonName.toLowerCase())
  })

  return (
    <form onSubmit={onFormSubmit} className="grid grid-cols-7 items-stretch gap-6">
      <label htmlFor="pokemonName" className="block col-span-5">
        <input
          {...register("pokemonName", { 
            required: "You must enter a pokemon name", 
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Only characters in the range A to Z / a to z are allowed"
            } 
          })}
          type="text"
          className="h-full px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-lg focus:ring-1"
          placeholder="Charizard, Bulbasaur, Wartortle ..."
        />
      </label>
      { errors.pokemonName && <p role="alert" className="col-span-full order-1 text-red-500 text-xl">{errors.pokemonName!.message}</p>} 
      <div className="col-span-2">
        <Button type="submit" className="bg-primary text-white">Search Now</Button>
      </div>
    </form>
  )
}

export default SearchForm