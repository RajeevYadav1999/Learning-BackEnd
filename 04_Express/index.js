const express = require('express')
// console.log(express);

const app = express()

app.get('/', (req, res)=>{
    res.send("You are on Home Page")
})

app.get('/about', (req, res)=>{
    res.send("You are on about Page")
})

app.listen(3000, ()=>{
    console.log("Server is running");
})