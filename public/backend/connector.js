import pg from 'pg'
const Client=pg.Client

const connect=async()=>{
    const connection=new Client({
        user:process.env.DBUSER,
        host:process.env.HOST,
        database:process.env.DATABASE,
        password:process.env.DBPASSWORD,
        port:process.env.PORT
    })
    await connection.connect()
    let res=await connection.query('SELECT * from schema1.themes_hackaton')
    console.log(res)
    await connection.end()
}
export {connect}

