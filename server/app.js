// Libraries
import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"
// Files
import api from "./api/index.js"
import { notFound, errorHandler } from "./middleware.js"

const app = express()

// Middleware Setup
app.use(morgan("dev"))
app.use(helmet())
app.use(cors())
app.use(express.json())

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Pokemon Shakespeare 👋"
  });
});

app.use("/api/", api)
app.use(notFound)
app.use(errorHandler)

export default app
