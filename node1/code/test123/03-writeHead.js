const http = require("http");

const server = http.createServer(function (req, res) {
  // res.writeHead(200, {
  //   'Content-type':'text/html;charset=utf-8;'
  // });
    res.writeHead(200, {'Content-type':'text/html;charset=utf-8;'});
  res.write("<h1>你好世界</h1>");
  res.end();
});
server.listen(3000);