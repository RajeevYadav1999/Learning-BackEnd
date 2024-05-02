const http = require('http')
const fs = require('fs')
const url = require('url')

// console.log(url);

const myServer = http.createServer((req, res)=>{
    // console.log(req);

    const log= `${Date.now()} ${req.method} ${req.url} New request received \n`

    // /about "About me"
    const myUrl= url.parse(req.url, true);

    fs.appendFile("logfile.txt", log, (error, result)=>{
        
        // switch(req.url){
            switch(myUrl.pathname){
            case "/":
            res.end("<h1>You're on the home page</h1>")
            break;

            case "/about":
             res.end(`You are on the about page ${myUrl.query.name}`) 
             break;

            default:
              res.end("you are connected with server")  
              break;
        }

        res.end("You're communicating with Server!")
    }) 
})

myServer.listen(8000, ()=>{
    console.log("Server is running on Port 8000");
})