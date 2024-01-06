const express = require('express')
require('dotenv').config()
const app = express()

const port=process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

let GithubData={
    "name": "dummy-repo",
    "description": "This is a dummy repository for testing purposes.",
    "private": false,
    "auto_init": true,
    "gitignore_template": "Node",
    "license_template": "mit"
  }

app.get('/Login',(req,res)=>{
    //res.send(GithubData)
    res.json(GithubData)
})

app.get('/Register',(req,res)=>{
    res.send('Welcome to Register Page')
})

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})