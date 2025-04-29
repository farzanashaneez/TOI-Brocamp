import express from 'express'
import cors from 'cors'
import cookieparser from 'cookie-parser'
import jwt from 'jsonwebtoken'

const app=express()

const aboutrouter=express.Router();
aboutrouter.get('/:id',(req,res)=>{
    const {query,params}=req;
    
    console.log(req.header('origin'))
    let sum=parseInt(query.num1)+parseInt(query.num2)
    res.json({sum})
})
const protectedrouter=express.Router();
protectedrouter.get('/',(req,res)=>{
    let header=req.headers['authorization']
    const jwttoken=jwt.sign({name:'farzana'},'secretkey',{expiresIn:'1hr'})
    const decoded=jwt.verify(jwttoken,'secretkey')
    console.log(jwttoken,decoded)

    console.log(header)
    res.json({header})
})

app.use(cors({
    methods:['GET','POST'],
    allowedHeaders:['Content-Type','Authorization'],
    credentials:true
}))
app.use(cookieparser())
app.use('/search',aboutrouter)
app.use('/protected',protectedrouter)
app.get('/',(req,res)=>{
    console.log(req.header)
    res.status(200).json({name:'farzana'})
})
app.get('/set',(req,res)=>{
    res.cookie('authtoken','xyz456',{httpOnly:true})
    res.send('cookie set successfully')
})
app.get('/check',(req,res)=>{
    let cookie=req.cookies
    res.json({cookie})
})
app.listen(3000,()=>{
    console.log('connect on port 3000')
})

