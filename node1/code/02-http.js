// apache 天生能处理http请求,但是node不一样.因为node只是一个运行环境
// node有提供了一个模块叫http.只要我们掉用http模块创建服务器方法
// 就能创建一个服务器
// 创建一个服务器分成3个步骤
// 1. 导入http模块
// 在nodejs中导入模块用require
const http = require('http');

// 2. 创建一个服务器
const server = http.createServer(function (request, response) {
  // request => 客户端发送过来的请求
  // response => 服务端给客户端发送的响应
  // end代表服务器结束响应,也就是说告诉客户端请求的响应已经结束
  // end只能出现一次,在end之后的东西浏览器收不到了
  response.end('<h1>hello world</h1>');
  // response.end('<h1>hello world</h1>');
  // response.end('<h1>hello world</h1>');
  // response.end('<h1>hello world</h1>');
});


// 3. 启动服务器
// 参数1: 监听的端口
// 参数2: 需要监听的IP地址
// 参数3. 回调函数(一旦成功启动服务器.就会调用这个函数)
server.listen(3000, '127.0.0.1', function () {
  console.log('服务器成功启动,并在3000端口监听');
});