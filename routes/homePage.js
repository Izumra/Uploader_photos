import express from "express"
import db from '../connector.js'
const router=express.Router()

router.get('/',async(req,res)=>{
    const data=await db('select * from schema1.participant')
    res.render('HomePage')
})

export default router