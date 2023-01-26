import express from "express"
import allRoutes from "./routes/index.js"
import dotenv from "dotenv"

const app=express()
dotenv.config()
app.use(express.static('public'))
allRoutes(app)
app.listen(1000)