// const http = require("http");
// let path = "127.0.0.1";
// let port = '3000';
// const server = http.createServer(function (req, res) {
//   res.writeHead(200, {
//     "Content-type": "text/html;charset=utf-8;"
//   });
//   if (req.url == "/favicon.ico") { return; }
//   if (req.url == "/") {
//     res.end("首页");
//   } else if (req.url == "/hh") {
//     req.end("你好");
//   } else {
//     res.writeHead(404, {'Content-type':'text/html;charset=utf-8;'});
//     req.end("世界");
//   }
// }).listen(port);


const http = require("http");
const server = http.createServer(function(req,res){
  res.writeHead(200,{"Content-type":"text/html;charset=utf-8;"});
  if(req.url == "/favicon.ico"){return;}
  if(req.url == "/"){res.write("你好");res.end()}
  else if(req.url == "/1")
  {res.write("世界");res.end()}
  else{
    res.writeHead(404,{"Content-type":"text/html;charset=utf-8;"})
    res.write("404");
    res.end()
  }

}).listen(3000);