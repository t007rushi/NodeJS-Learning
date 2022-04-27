const http = require("http");

const server = http.createServer((req, res) => {
  // console.log("request made");
  console.log(req.url,req.method)

  res.setHeader('Content-Type', 'text/html')

  res.write("<h3>Hello, Browser!</h3>")
  res.end();
});

server.listen(3001,'localhost',() =>{
    console.log("requesting on server 3001")
});
