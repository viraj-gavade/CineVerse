import dotenv from 'dotenv'
dotenv.config()

import path from "path"
import express,{Express,Request,Response} from "express"
import movieRoutes from './routes/movies.routers'
import { searchMovies } from './services/movie.services'

const app : Express = express()


const port : number = 3000

app.set('view engine', 'ejs'); // Setting ejs as the view engine

// Set the views directory for ejs templates
app.set('views', path.join(__dirname, 'views'));


app.use('/movies',movieRoutes)

app.get('/',async (req:Request,res:Response)=>{

    res.render('home')
})



app.listen(port,()=>{

    console.log('Server is listning on the port:-',port)
})