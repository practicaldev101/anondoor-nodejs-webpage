const http = require("http");
const servidor = http.createServer();
const puerto = 3000;

servidor.listen(puerto,()=>{
    console.log("server en puerto " + puerto);
})
