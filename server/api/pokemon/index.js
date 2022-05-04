// Libraries
import express from "express"
// Files
import { getPokemon } from "../../controllers/pokemon.js"

const router = express.Router()
router.get("/:pokemonName", (req, res, next) => {
  getPokemon(req, res, next)
})

export default router