// Libraries
import express from "express"

const router = express.Router()
router.get("/:pokemonName", (req, res, next) => {
  res.json({name: "Pokemon Name", description: "Pokemon Description"})
})

export default router