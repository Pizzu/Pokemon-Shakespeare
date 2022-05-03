// Libraries
import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"

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

export default app
