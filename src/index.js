const express = require("express");
const app = express()
const puerto = 3000;

app.get("/", (req, res) =>{
    res.sendFile(__dirname +  "/index.html")
})

app.listen(puerto, ()=>{
    console.log("servidor en puerto " + puerto)
})
