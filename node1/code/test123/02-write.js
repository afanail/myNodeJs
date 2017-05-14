const http = require("http");

const server = http.createServer(function(req,res){
  res.write("<h1>你好,世界</h1>");
  res.write("<h1>你好,世界</h1>");
  res.write("<h1>你好,世界</h1>");
  res.end();//结束响应,一定要有,而且只能一次
});

server.listen(3000);