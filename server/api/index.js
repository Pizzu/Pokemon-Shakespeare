// Libraries
import express from "express"
// Files
import pokemon from "./pokemon/index.js"

const router = express.Router()
router.use("/pokemon", pokemon)

export default router