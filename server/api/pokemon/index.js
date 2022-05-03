// Libraries
import express from "express"
// Files
import { getPokemonDescription } from "../../controllers/pokemon.js"

const router = express.Router()
router.get("/:pokemonName", (req, res, next) => {
  getPokemonDescription(req, res, next)
})

export default router