import dotenv from 'dotenv'
dotenv.config()


import express,{Express,Request,Response} from "express"


const app : Express = express()


const port : number = 3000


app.get('/',(req:Request,res:Response)=>{
    res.send('Home page')
})


app.listen(port,()=>{

    console.log('Server is listning on the port:-',port)
})