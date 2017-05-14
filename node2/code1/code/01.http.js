// 1. 导入模块
const http = require('http');
// 2. 创建服务
const server = http.createServer(function(req, res){
  // 设置网页编码格式
  res.writeHead(200, {'Content-type':'text/html;charset=utf-8'});

  res.write('123');

  res.end('123');
});
// 3. 启动监听
server.listen(3000, '192.168.4.221');