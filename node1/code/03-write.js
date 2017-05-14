//1. 导入http模块
const http = require('http');
// 2.创建服务器
const server = http.createServer(function(req,res){
  
  // write方法就是服务器向客户端发送数据
  // 可以多次给客户端发送数据,但是必须在end之前
  res.write('<h1>hello world</h1>');
  res.write('<h1>hello world</h1>');
  res.write('<h1>hello world</h1>');
  res.write('<h1>hello world</h1>');
  res.write('<h1>hello world</h1>');

  res.end(); //结束响应, 一定要有,而且只能一次
});

//3 启动服务器
server.listen(3000)