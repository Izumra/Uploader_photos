import express from 'express'
import dotenv from 'dotenv'
import {connect} from './public/backend/connector.js'

const app=express()
app.use(express.static('public'))
dotenv.config()

app.get('/',(req,res)=>{
    connect()
    res.send("server photos")
})
app.listen(3000)