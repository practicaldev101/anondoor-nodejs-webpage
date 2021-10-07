const express = require("express");
const app = express()
puerto = 3000;

app.get("/", (req, res) =>{
    res.send("Hello World! ");
})

app.listen(puerto, ()=>{
    console.log("servidor en puerto " + puerto)
})
