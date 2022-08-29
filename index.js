const express = require('express')
const app = express()

app.get("/",(req,res)=>{
   res.send("Home")
})

app.get("/About",(req,res)=>{
    res.send("About")
})

app.get("/Contact",(req,res)=>{
    res.send("Contact")
})

app.get("/Service",(req,res)=>{
    res.send("Service")
})

app.listen(6000,()=>{
    console.log("Server is runnig at port 6000")
})