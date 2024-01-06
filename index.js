const express = require('express')
require('dotenv').config()
const app = express()

const port=process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

let User={
    Name:"Ram",
    Gender:"Male"
}

app.get('/Login',(req,res)=>{
    res.send(User)
})

app.get('/Register',(req,res)=>{
    res.send('Welcome to Register Page')
})

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})