const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request made");
});

server.listen(3001,'localhost',() =>{
    console.log("requesting on server 3001")
});
