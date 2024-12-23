import dotenv from 'dotenv'
dotenv.config()


import express,{Express,Request,Response} from "express"
import movieRoutes from './routes/movies.routers'

const app : Express = express()


const port : number = 3000

app.use('/movies',movieRoutes)

app.get('/',(req:Request,res:Response)=>{
    res.send('Home page')
})



app.listen(port,()=>{

    console.log('Server is listning on the port:-',port)
})