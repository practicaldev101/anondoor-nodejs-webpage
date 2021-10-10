const express = require("express");
const bodyParser = require('body-parser');
const app = express()
const puerto = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) =>{
    res.sendFile(__dirname +  "/views/home.html");
    app.use(express.static("theme"));
})

app.post("/contact", (req, res) =>{
    var data = {
        "subject": req.body.subject,
        "from": req.body.from,
        "to": "your email here",
        "comment": req.body.comment
    };
    console.log(data.subject);

    if(data.subject && data.from && data.comment){
        res.send("<script>alert('Do something'); document.location = '/#contact'</script>");

        /*TODO - Write your code here*/
    }
    else{
        res.redirect("/#contact");
    }
})

app.listen(puerto, ()=>{
    console.log("servidor en puerto " + puerto)
})
