const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log("request made");
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  var path = ""
  switch (req.url) {
    case "/":
      path = "index.html"
      break
    case "/about":
      path = "about.html"
      break
    default:
      path = "404.html"
  }

  //send html files back as response
  fs.readFile(`./view/${path}`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
      res.end();
      //shortcut if only single data => res.end(data)
    }
  });
});

server.listen(3001, "localhost", () => {
  console.log("requesting on server 3001");
});
