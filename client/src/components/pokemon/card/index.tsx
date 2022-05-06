import { Modal } from "../../common"

type PokemonCardProps = {
  showPokemonCard: boolean
}

const PokemonCard: React.FC<PokemonCardProps> = ({showPokemonCard}) => {
  return (
    <Modal isOpen={showPokemonCard}>
      <div className="px-8 py-8 inline-block align-bottom backdrop-blur-[80px] bg-black/20 rounded-md border-2 border-white/40 overflow-hidden transform transition-all">
        <h1>Hello</h1>
      </div>
    </Modal>
  )
}

export default PokemonCard