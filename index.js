import express from "express"
import allRoutes from "./routes/GRoute.js"
import dotenv from "dotenv"

const app=express()
dotenv.config()
app.use(express.static('public'))
app.set('view engine','ejs')
app.set('views','./public/views')
allRoutes(app)
app.listen(4000)
console.log('Server is started on address: http://localhost:4000')