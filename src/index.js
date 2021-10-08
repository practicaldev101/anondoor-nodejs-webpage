const express = require("express");
const app = express()
const puerto = 3000;

app.get("/", (req, res) =>{
    res.sendFile(__dirname +  "/views/home.html");
    app.use(express.static("theme"));
})

app.listen(puerto, ()=>{
    console.log("servidor en puerto " + puerto)
})
