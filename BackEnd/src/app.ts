import express , {Request , Response} from 'express'
import cors from 'cors'
const app = express() ;


app.use(cors())

app.get('/' , (req: Request , res : Response)=>{
    res.send("Response from Backend")
})


app.listen(8000 , ()=>{
    console.log('SERVER STARTED : http://localhost:8000/')
})