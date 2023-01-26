import pg from 'pg'
const Client = pg.Client
import dotenv from "dotenv"

dotenv.config()
const getFromDB=async(request,params)=>{
    try{
        const client=await new Client()
        client.connect()
        const {rows}=await client.query(request,params)
        client.end()
        return rows
    }catch(error){
        console.log(error.stack)
    }
}
export default getFromDB