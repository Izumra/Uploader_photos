import express from 'express'
const app=express()

app.get('/',(req,res)=>res.send("seerver photos"))
app.listen(5000)