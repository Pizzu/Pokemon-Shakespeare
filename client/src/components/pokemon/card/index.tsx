type PokemonCardProps = {
  pokemonData: {name: string, description: string},
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonData }) => {
  return (
      <div className="max-w-3xl px-8 py-8 inline-block align-bottom backdrop-blur-[80px] bg-white rounded-lg shadow-2xl">
        <h3>Pokemon Name</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facilis ipsam eum.</p>
      </div>
  )
}

export default PokemonCard