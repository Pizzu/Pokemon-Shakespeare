import { useEffect, useState } from "react"
import { Button, Modal } from "../../common"

type PokemonCardProps = {
  pokemonData: boolean,
  resetPokemonData: () => void
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonData, resetPokemonData }) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    pokemonData && setShowModal(true)
  }, [pokemonData])

  const closeModal = () => {
    setShowModal(false)
    resetPokemonData()
  }

  return (
    <Modal isOpen={showModal}>
      <div className="max-w-3xl px-8 py-8 inline-block align-bottom backdrop-blur-[80px] bg-white rounded-lg shadow-2xl">
        <h3>Pokemon Name</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facilis ipsam eum.</p>
        <Button onClick={closeModal} className="bg-primary text-white">Close</Button>
      </div>
    </Modal>
  )
}

export default PokemonCard