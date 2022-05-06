import { PokemonServerRes } from "../../../types"

type PokemonCardProps = {
  pokemonData: PokemonServerRes,
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonData }) => {
  return (
      <div className="max-w-3xl px-8 py-8 inline-block align-bottom backdrop-blur-[80px] bg-white rounded-lg shadow-2xl">
        <h3>{pokemonData.name}</h3>
        <p>{pokemonData.description}</p>
      </div>
  )
}

export default PokemonCard